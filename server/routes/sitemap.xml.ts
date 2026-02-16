export default defineEventHandler(async (event) => {
  const posts = await queryCollection('blog').all()

  const routes = [
    '/',
    '/blog',
    '/about',
    '/projects',
    '/speaking',
    ...posts.map(post => post.path)
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>https://v4vinayakdev.pages.dev${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`

  event.node.res.setHeader('Content-Type', 'application/xml')
  return sitemap
})
