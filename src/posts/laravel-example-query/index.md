---
title: "Optimizing Laravel Queries: Moving Logic from PHP to the Database"
description: "How offloading vegetarian filtering from Eloquent collections to raw SQL reduced memory usage and improved performance in a Laravel menu system"
date: "2026-02-21"
keywords: ["laravel", "eloquent", "query optimization", "database", "php", "performance", "sql", "postgresql"]
image: "/images/mdsvex-tutorial.jpg"
---

<script>
import mainImg from './main.png';
import problem1Img from './problem1.png';
import solution1Img from './solution1.png';
</script>

# Menu Items & Ingredients

Before diving into the complete system architecture, let me begin with its fundamental building blocks: menu items and ingredients. Each ingredient is classified as either vegetarian or non-vegetarian, which forms the basis of our data model. Below is a brief overview of the database schema and the relationships between these entities.

<img src={mainImg} alt="Menu items and ingredients data model overview" />

## Database Schema

```
ingredients
├── id                  bigint (PK)
├── name                varchar
├── vegetarian          boolean (default: true)
├── created_at          timestamp
└── updated_at          timestamp

menu_items
├── id                  bigint (PK)
├── name                varchar
├── signature_dish      boolean (default: false)
├── availability        boolean (default: true)
├── created_at          timestamp
└── updated_at          timestamp

ingredient_menu_item
├── ingredient_id
└── menu_item_id
```

## Entity Relationship Tree

```
MenuItem
├── name
├── signature_dish
├── availability
├── ingredients()           belongsToMany → Ingredient
│   ├── name
│   └── vegetarian

```

To filter menu items based on their vegetarian status, the most straightforward approach might seem like loading the data from the database and processing it on the server. For a simple project, something like this would work:

```bladehtml
<!--$menuItems = MenuItem::with('ingredients')->get();-->

<!--Then in the Blade template, calculate on the fly-->
@foreach ($menuItems as $menuItem)
    @php
        $isVegetarian = $menuItem->ingredients->every(fn ($ingredient) => $ingredient->vegetarian);
    @endphp
```

<img src={problem1Img} alt="Memory usage with in-application filtering approach" />

While this gets the job done, it comes at a cost. Every request loads all menu items and their ingredients into memory, only to perform a calculation that the database could handle far more efficiently. When I encountered this pattern in a project I was optimizing, it was contributing to unnecessary RAM consumption and model hydration overhead.

Let's explore a better approach: `offloading this logic to the database itself`.

```php
// MenuItem.php

public function scopeWithIngredientsData(Builder $query): void
    {
        $query
            ->leftJoin(
                'ingredient_menu_item',
                 'menu_items.id', '=',
                  'ingredient_menu_item.menu_item_id')
            ->leftJoin('ingredients',
             'ingredients.id', '=',
              'ingredient_menu_item.ingredient_id')
            ->groupBy('menu_items.id')
            ->select(
                'menu_items.*',
                DB::raw('count(ingredients.id) FILTER (WHERE NOT ingredients.vegetarian) = 0 as vegetarian'),
                DB::raw("json_agg(json_build_object('name', ingredients.name, 'vegetarian', ingredients.vegetarian) ORDER BY ingredients.name) FILTER (WHERE ingredients.id IS NOT NULL) as ingredient_list")
            );
    }

protected function casts(): array
    {
        return [
            'vegetarian' => 'boolean',
            'ingredient_list' => 'array',
        ];
    }
```

A small upfront investment that pays off at scale. `DB::raw('count(ingredients.id) FILTER (WHERE NOT ingredients.vegetarian) = 0 as vegetarian'),` saving significant memory, reducing query overhead.


```bladehtml
<!--$menuItems = MenuItem::withIngredientsData()->get();-->

<!--Just attach the column-->
@foreach ($menuItems as $menuItem)
    @php
        $isVegetarian = $menuItem->vegetarian
    @endphp
```

<img src={solution1Img} alt="Reduced memory usage with database-level filtering" />

The result? A single query that loads only the models needed for the screen, delivering faster response times and significantly lower RAM usage roughly 10MB saved, which could be reduced even further with pagination.

But this was just the beginning. `I'll walk through a more complex scenario that made this database-level approach even more essential.` Imagine a Proposal table linked to ProposalService, which in turn contains MenuItem. Now, what if a service has a vegetarian constraint, but an admin accidentally adds a non-vegetarian item to it? Building an overview screen that flags these mismatches — highlighting services meant to be purely vegetarian but containing non-veg items would be a nightmare to handle in application code. I'll break down how we tackled that in the next post.
