const fs = require('fs');
const path = require('path');

const fileNames = ['src/components/HeaderTwo.jsx', 'src/components/FooterTwo.jsx'];

for (const fileName of fileNames) {
  const filePath = path.join(__dirname, fileName);
  let content = fs.readFileSync(filePath, 'utf8');

  if (fileName === 'src/components/HeaderTwo.jsx') {
    // 1. Replace the desktop nav menu
    const startIdx = content.indexOf("{/* Menu Start  */}");
    const endIdx = content.indexOf("{/* Menu End  */}", startIdx);
    
    if (startIdx !== -1 && endIdx !== -1) {
      const newDesktopMenu = `{/* Menu Start  */}
              <div className='header-menu d-lg-block d-none'>
                {/* Nav Menu Start */}
                <ul className='nav-menu flex-align '>
                  <li className='nav-menu__item'>
                    <Link href='/shop' scroll={false} className={\`nav-menu__link \${pathname == "/shop" && "activePage"} \`}>Shop</Link>
                  </li>
                  <li className='nav-menu__item'>
                    <Link href='/account' scroll={false} className={\`nav-menu__link \${pathname == "/account" && "activePage"} \`}>Account</Link>
                  </li>
                  <li className='nav-menu__item'>
                    <Link href='/cart' scroll={false} className={\`nav-menu__link \${pathname == "/cart" && "activePage"} \`}>Cart</Link>
                  </li>
                  <li className='nav-menu__item'>
                    <Link href='/compare' scroll={false} className={\`nav-menu__link \${pathname == "/compare" && "activePage"} \`}>Compare</Link>
                  </li>
                </ul>
                {/* Nav Menu End */}
              </div>
              `;
      content = content.substring(0, startIdx) + newDesktopMenu + content.substring(endIdx);
    } else {
        console.log("Could not find Desktop Menu Block");
    }

    // 2. Remove Wishlist from header activities (there are two blocks: mobile and desktop)
    // We can do this with regex replacing the block that has href='/wishlist' and includes the heart icon
    const wishlistRegex = /<Link\s*href='\/wishlist'[\s\S]*?<\/Link>/g;
    content = content.replace(wishlistRegex, '');

  } else if (fileName === 'src/components/FooterTwo.jsx') {
    // Rewrite FooterTwo entirely
    content = `"use client";
import React from "react";
import Link from "next/link";

const FooterTwo = () => {
  return (
    <footer className='footer py-80'>
      <div className='container container-lg'>
        <div className='footer-item-two-wrapper d-flex align-items-start flex-wrap'>
          <div className='footer-item max-w-275'>
            <div className='footer-item__logo'>
              <Link href='/'>
                <h3 className='mb-0 text-white'>APL Trading</h3>
              </Link>
            </div>
            <p className='mb-24'>
              APL Trading - Your trusted B2B product sourcing and inquiry marketplace.
            </p>
            <div className='flex-align gap-16 mb-16'>
              <span className='w-32 h-32 flex-center rounded-circle border border-gray-100 text-main-two-600 text-md flex-shrink-0'>
                <i className='ph-fill ph-envelope' />
              </span>
              <a href='mailto:info@apltrading.com' className='text-md text-gray-900 hover-text-main-600'>
                info@apltrading.com
              </a>
            </div>
          </div>
          
          <div className='footer-item'>
            <h6 className='footer-item__title'>Quick Links</h6>
            <ul className='footer-menu'>
              <li className='mb-16'><Link href='/shop' className='text-gray-600 hover-text-main-600'>Shop</Link></li>
              <li className='mb-16'><Link href='/account' className='text-gray-600 hover-text-main-600'>My Account</Link></li>
              <li className='mb-16'><Link href='/cart' className='text-gray-600 hover-text-main-600'>Cart</Link></li>
              <li className='mb-16'><Link href='/compare' className='text-gray-600 hover-text-main-600'>Compare</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
`;
  }

  fs.writeFileSync(filePath, content);
  console.log('Updated', fileName);
}
