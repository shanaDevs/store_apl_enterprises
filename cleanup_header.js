const fs = require('fs');
const path = require('path');

const headerTwoPath = path.join(__dirname, 'src', 'components', 'HeaderTwo.jsx');
let headerTwo = fs.readFileSync(headerTwoPath, 'utf8');

// Replace Mobile Menu
const mobileMenuRegex = /\{\/\* Nav Menu Start \*\/\s*.*?\/\* Nav Menu End \*\/\}/s;
const newMobileMenu = `{/* Nav Menu Start */}
            <ul className='nav-menu flex-align nav-menu--mobile'>
              <li className='nav-menu__item'>
                <Link href='/shop' className='nav-menu__link'>Shop</Link>
              </li>
              <li className='nav-menu__item'>
                <Link href='/account' className='nav-menu__link'>Account</Link>
              </li>
              <li className='nav-menu__item'>
                <Link href='/cart' className='nav-menu__link'>Cart</Link>
              </li>
              <li className='nav-menu__item'>
                <Link href='/compare' className='nav-menu__link'>Compare</Link>
              </li>
            </ul>
            {/* Nav Menu End */}`;
headerTwo = headerTwo.replace(mobileMenuRegex, newMobileMenu);

// Replace Desktop Menu
const desktopMenuRegex = /<ul className='nav-menu flex-align '>\s*<li\s*className='on-hover-item.*?<\/ul>\s*<\/div>\s*<\/div>/s;
// The desktop menu is usually under `<div className='header-bottom'>` or similar. I'll just use a more targeted replacement if needed, but let's first test the file to find where the desktop menu is.

fs.writeFileSync(headerTwoPath, headerTwo);
console.log('Mobile menu updated in HeaderTwo.jsx');
