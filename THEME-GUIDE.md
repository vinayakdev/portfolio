# Theme System Guide

This portfolio includes a complete dark/light theme toggling system built with Tailwind CSS.

## Features

- 🌓 Light and Dark mode
- 💾 Theme preference saved to localStorage
- 🎨 Respects system theme preference on first visit
- 🔄 Smooth transitions between themes
- 🎯 Toggle button in navigation

## How It Works

### Theme Store (`src/lib/stores/theme.ts`)

The theme system uses a Svelte store to manage theme state:

```typescript
import { theme, toggleTheme } from '$lib/stores/theme';

// Get current theme
$theme // 'light' or 'dark'

// Toggle theme
toggleTheme();
```

### Theme Toggle Component

A pre-built toggle button is available in the navigation:

```svelte
import { ThemeToggle } from '$lib/components';

<ThemeToggle />
```

The component shows a sun icon in light mode and a moon icon in dark mode.

## Using Tailwind Dark Mode

Apply dark mode styles using the `dark:` prefix:

```svelte
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  <p class="text-gray-600 dark:text-gray-400">This text adapts to theme</p>
</div>
```

### Common Dark Mode Patterns

**Backgrounds:**
```html
bg-white dark:bg-gray-900          <!-- Main background -->
bg-gray-100 dark:bg-gray-800       <!-- Card background -->
bg-gray-200 dark:bg-gray-700       <!-- Subtle background -->
```

**Text:**
```html
text-gray-900 dark:text-gray-100   <!-- Primary text -->
text-gray-600 dark:text-gray-400   <!-- Secondary text -->
text-gray-500 dark:text-gray-500   <!-- Muted text -->
```

**Links:**
```html
text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300
```

**Borders:**
```html
border-gray-200 dark:border-gray-700
```

## Customizing Theme Colors

Edit `tailwind.config.js` to customize theme colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

## Theme Persistence

The theme is automatically saved to `localStorage` when changed:
- **Key:** `theme`
- **Values:** `'light'` or `'dark'`

On first visit, the system checks:
1. localStorage for saved preference
2. System preference (`prefers-color-scheme`)
3. Defaults to light mode

## Adding Theme Support to New Components

1. Use Tailwind's `dark:` variant:
   ```svelte
   <div class="bg-white dark:bg-gray-800">
     <!-- content -->
   </div>
   ```

2. Or access the theme store directly:
   ```svelte
   <script>
     import { theme } from '$lib/stores/theme';
   </script>

   {#if $theme === 'dark'}
     <!-- Dark mode specific content -->
   {:else}
     <!-- Light mode specific content -->
   {/if}
   ```

## Transitions

Add smooth transitions with Tailwind:

```html
<div class="transition-colors duration-200">
  <!-- Content -->
</div>
```

The root layout already includes transitions for seamless theme switching.

## Testing

Test theme switching:
1. Visit any page
2. Click the theme toggle button in the navigation
3. Refresh the page - theme should persist
4. Open DevTools and clear localStorage - should default to system preference

## Browser Support

The theme system works in all modern browsers that support:
- localStorage
- CSS custom properties
- `prefers-color-scheme` media query

## Troubleshooting

**Theme not persisting:**
- Check browser localStorage is enabled
- Verify no errors in console

**Theme flashing on load:**
- The theme is applied immediately in the store initialization
- Make sure the store is imported before components render

**Dark mode not working:**
- Verify `darkMode: 'class'` is set in `tailwind.config.js`
- Check that `dark` class is being applied to `<html>` element
