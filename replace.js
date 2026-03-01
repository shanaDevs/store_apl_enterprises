const fs = require('fs');
const file = 'e:/Projects/dart_code/APL_Trading/store/src/components/ShopSection.jsx';
let data = fs.readFileSync(file, 'utf8');

const replacements = {
  'Add To Cart': 'Add To Inquiry',
  'Mobile &amp; Accessories (12)': 'Construction Material (1,250)',
  'Laptop (12)': 'Steel & Metals (840)',
  'Electronics (12)': 'Import Vehicles (2,100)',
  'Smart Watch (12)': 'Vehicle Spare Parts (5,400)',
  'Storage (12)': 'Electrical Components (950)',
  'Portable Devices (12)': 'Solar Panels & Inverters (320)',
  'Action Camera (12)': 'Industrial Fibers (410)',
  'Taylor Farms Broccoli Florets Vegetables': 'High-Tensile Industrial Steel Coils (Cold Rolled)',
  'assets/images/thumbs/product-two-img1.png': 'assets/images/b2b_products/product_steel_coils.png',
  'assets/images/thumbs/product-two-img2.png': 'assets/images/b2b_products/product_solar_panels.png',
  'assets/images/thumbs/product-two-img3.png': 'assets/images/b2b_products/product_auto_parts.png',
  'assets/images/thumbs/product-two-img4.png': 'assets/images/b2b_products/product_fibers.png'
};

for (const [key, value] of Object.entries(replacements)) {
  data = data.split(key).join(value);
}

fs.writeFileSync(file, data);
