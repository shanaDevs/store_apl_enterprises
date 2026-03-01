"use client";
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
