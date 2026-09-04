const fs = require('fs');
const html = fs.readFileSync('c:/Users/ABC/OneDrive/projects/snowflakz/snowflakz_live.html', 'utf8');

// Strip styles and scripts for text extraction
const cleanHtml = html
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<script[\s\S]*?<\/script>/gi, '');

// Extract Headings
const headings = (cleanHtml.match(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi) || [])
  .map(h => h.replace(/<[^>]+>/g, '').trim())
  .filter(Boolean);

console.log('=== HEADINGS ON SNOWFLAKZ.COM ===');
headings.forEach(h => console.log(' ->', h));

// Extract Image URLs
const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
let match;
const images = new Set();
while ((match = imgRegex.exec(html)) !== null) {
  images.add(match[1]);
}

console.log('\n=== IMAGES ON SNOWFLAKZ.COM ===');
images.forEach(img => console.log(' ->', img));

// Extract Navigation Links
const linkRegex = /<a[^>]+href=["']([^"']+)["']/gi;
const links = new Set();
while ((match = linkRegex.exec(html)) !== null) {
  if (!match[1].startsWith('#') && !match[1].includes('javascript')) {
    links.add(match[1]);
  }
}

console.log('\n=== LINKS ON SNOWFLAKZ.COM ===');
links.forEach(l => console.log(' ->', l));

// Extract Main Text Paragraphs & Sections
const paragraphs = (cleanHtml.match(/<p[^>]*>[\s\S]*?<\/p>/gi) || [])
  .map(p => p.replace(/<[^>]+>/g, '').trim())
  .filter(p => p.length > 10);

console.log('\n=== KEY TEXT PARAGRAPHS ===');
paragraphs.forEach(p => console.log(' *', p));
