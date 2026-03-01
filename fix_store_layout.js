const fs = require('fs');
const path = require('path');

const b2bCategories = `
                    <option value={1}>Steel & Metals</option>
                    <option value={2}>Construction Material</option>
                    <option value={3}>Commercial Solar</option>
                    <option value={4}>Industrial Fibers</option>
                    <option value={5}>Heavy Machinery</option>
                    <option value={6}>OEM Auto Parts</option>
`;

function fixHeader(filePath) {
  if (!fs.existsSync(filePath)) return;
  let text = fs.readFileSync(filePath, 'utf8');
  
  // Replace the search dropdown options
  // It normally has "Ice Cream", "Biscuits & Snacks" etc.
  text = text.replace(/<option value=\{1\}>Ice Cream<\/option>[\s\S]*?<option value=\{5\}>Fresh Fruits<\/option>/, b2bCategories);
  
  // Remove Wishlist
  text = text.replace(/<Link\s*href='\/cart'[\s\S]*?className='flex-align flex-column.*?>[\s\S]*?ph-heart[\s\S]*?<\/Link>/g, "");
  
  // Fix Compare Link (points to /cart usually)
  text = text.replace(/href='\/cart'([\s\S]*?ph-arrows-left-right)/g, "href='/compare'$1");
  
  // Rename Cart to Inquiry List
  text = text.replace(/<span className='text-md fw-medium text-gray-900'>Cart<\/span>/g, "<span className='text-md fw-medium text-gray-900'>Inquiry List<\/span>");
  
  // Remove "Blog", "Pages", "Vendors" from Nav Menu
  text = text.replace(/<li className='nav-submenu__item[\s\S]*?>\s*<Link\s*href='\/blog'[\s\S]*?Blog\s*<i[\s\S]*?<\/li>/, "");
  text = text.replace(/<li className='nav-submenu__item[\s\S]*?>\s*<Link\s*href='\/shop'[\s\S]*?Pages\s*<i[\s\S]*?<\/li>/, "");
  text = text.replace(/<li className='nav-submenu__item[\s\S]*?>\s*<Link\s*href='\/shop'[\s\S]*?Vendors\s*<i[\s\S]*?<\/li>/, "");

  // Remove logo placeholders sizes 236x44
  text = text.replace(/<img\s*src='assets\/images\/logo\/logo[^']*'\s*alt='[^']*'\s*\/>/g, "<h3 className='mb-0 text-gray-900'>APL Trading</h3>");

  fs.writeFileSync(filePath, text, 'utf8');
}

function fixFooter(filePath) {
  if (!fs.existsSync(filePath)) return;
  let text = fs.readFileSync(filePath, 'utf8');

  // Fix company desc
  text = text.replace(/We're Marketpro, an awesome shopping theme.*?gaming pc parts/g, "We are APL Trading, your premier B2B global sourcing partner connecting businesses with reliable manufacturers.");
  
  // Replace Dummy logos
  text = text.replace(/<img\s*src='assets\/images\/logo\/logo[^']*'\s*alt='[^']*'\s*\/>/g, "<h3 className='mb-0 text-white'>APL Trading</h3>");
  
  // Remove Extra Links
  text = text.replace(/<li className='mb-16'>\s*<Link\s*href='\/shop'[\s\S]*?Huawei Group.*?<\/Link>\s*<\/li>/g, "");
  text = text.replace(/<li className='mb-16'>\s*<Link\s*href='\/shop'[\s\S]*?Redeem Voucher.*?<\/Link>\s*<\/li>/g, "");
  text = text.replace(/<li className='mb-0'>\s*<Link\s*href='\/shop'[\s\S]*?Gift Card.*?<\/Link>\s*<\/li>/g, "");
  
  // Remove App Downloads
  text = text.replace(/<div className='flex-align gap-16 mt-32'>[\s\S]*?play-store\.png[\s\S]*?<\/div>/, "");

  fs.writeFileSync(filePath, text, 'utf8');
}

const componentsDir = path.join(__dirname, 'src', 'components');
fs.readdirSync(componentsDir).forEach(fn => {
  if (fn.startsWith('Header') && fn.endsWith('.jsx')) fixHeader(path.join(componentsDir, fn));
  if (fn.startsWith('Footer') && fn.endsWith('.jsx')) fixFooter(path.join(componentsDir, fn));
});

console.log('Store Layouts Cleaned Up');
