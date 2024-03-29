import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')
      
    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')
    
    // generate sitemap here
    const baseUrl = "https://www.xeozrodel-food.com/"
    const pagesUrls = [
        { url: `${baseUrl}`, priority: "1.0" },
        { url: `${baseUrl}about`, priority: "0.7" },
        { url: `${baseUrl}services`, priority: "0.7" },
        { url: `${baseUrl}reviews`, priority: "0.7" },
        { url: `${baseUrl}contact`, priority: "0.7" },
        { url: `${baseUrl}blog`, priority: "0.7" },
        { url: `${baseUrl}blog/xeofood-what-is-it`, priority: "0.7" },
        { url: `${baseUrl}blog/the-places-to-be-in-xeozrodel`, priority: "0.7" },
        { url: `${baseUrl}blog/xeozrodel-camping`, priority: "0.7" },
        { url: `${baseUrl}blog/xeozrodel-biggest-city`, priority: "0.7" },
        { url: `${baseUrl}blog/best-xeozrodel-meals-to-try-out`, priority: "0.7" }
    ]

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pagesUrls
            .map((page) => {
            return `
                <url>
                <loc>${page.url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>daily</changefreq>
                <priority>${page.priority}</priority>
                </url>
            `;
            })
            .join("")}
        </urlset>
    `;
  
    res.end(sitemap)
}