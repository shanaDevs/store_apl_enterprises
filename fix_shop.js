const fs = require('fs');
const path = require('path');

const shopSectionPath = path.join(__dirname, 'src', 'components', 'ShopSection.jsx');

let content = fs.readFileSync(shopSectionPath, 'utf8');

// 1. Fix massive image css
content = content.split("className='w-auto max-w-unset'").join("className='w-100 h-100 object-fit-cover'");

// 2. Remove the FOMO Sold Progress Bars block by splitting lines
let lines = content.split('\n');
let filteredLines = [];
let skipMode = false;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("<div className='mt-8'>") && lines[i+1] && lines[i+1].includes("<div") && lines[i+2] && lines[i+2].includes("className='progress")) {
    skipMode = true;
    continue; // skip the opener
  }
  
  if (skipMode) {
    if (lines[i].includes("Sold: 18/35") || lines[i].includes("Sold: 10/20") || lines[i].includes("</div>")) {
      // rough heuristic to find end of this block
      // Actually, the block is exactly 16 lines long in the template.
      // Let's just use exact string replacement instead of line parsing which is tricky.
    }
  }
}

// Safer regex for FOMO bars: Find exact multi-line string or simpler regex
content = content.replace(/<div className='mt-8'>\s*<div\s*className='progress [\s\S]{1,300}?Sold: \d+\/\d+\s*<\/span>\s*<\/div>/g, "");

// 3. Remove "Best Sale", "Sale 50%" badges
content = content.replace(/<span className='product-card__badge[^>]*>.*?<\/span>/g, "");

// 4. Update the Prices to look more B2B and remove the strike-through
content = content.replace(/<span className='text-gray-400 text-md fw-semibold text-decoration-line-through'>\s*\$[\d.]+\s*<\/span>/g, "");
content = content.replace(/<span className='text-heading text-md fw-semibold '>\s*\$([\d.]+)\s*<span className='text-gray-500 fw-normal'>\/Qty<\/span>\s*<\/span>/g, "<span className='text-heading text-md fw-semibold '>\$$1 / unit <span className='text-gray-500 fw-normal'>(Bulk)</span> </span>");

// 5. Update Rating count to be more realistic (from 17k -> 45, etc)
content = content.replace(/\(17k\)/g, "(14)");
content = content.replace(/\(15k\)/g, "(28)");

// 6. Update Retail Sidebar categories
content = content.replace(/Smart Gadget/g, "Industrial Tools");
content = content.replace(/Monitor Stands?/g, "Scaffolding");
content = content.replace(/Smart TV/g, "Commercial Displays");
content = content.replace(/Camera/g, "Security Systems");
content = content.replace(/Headphone/g, "Safety Gear");

// 7. Remove Filter by Rating
content = content.replace(/<div className='shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32'>\s*<h6 className='text-xl border-bottom border-gray-100 pb-24 mb-24'>\s*Filter by Rating\s*<\/h6>[\s\S]{1,1000}?(?=<\/div>\s*<\/div>\s*<\/div>\s*<\/div>)/g, "");

fs.writeFileSync(shopSectionPath, content, 'utf8');
console.log('ShopSection.jsx cleaned up!');
