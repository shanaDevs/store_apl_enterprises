"use client";
import React, { useEffect, useState } from "react";
import query from "jquery";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "select2/dist/css/select2.min.css";
import b2bData from "@/data/b2b-data.json";
const HeaderTwo = ({ category }) => {
  let pathname = usePathname();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScroll(window.pageYOffset > 150);
      };

      // Attach the scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Initialize Select2
      const selectElement = query(".js-example-basic-single");
      selectElement.select2();

      // Cleanup function
      return () => {
        // Remove the scroll event listener
        window.removeEventListener("scroll", handleScroll);

        // Destroy Select2 instance if it exists
        if (selectElement.data("select2")) {
          selectElement.select2("destroy");
        }
      };
    }
  }, []);

  // Set the default language
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  // Set the default currency
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  // Mobile menu support
  const [menuActive, setMenuActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleMenuClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  // Search control support
  const [activeSearch, setActiveSearch] = useState(false);
  const handleSearchToggle = () => {
    setActiveSearch(!activeSearch);
  };

  // category control support
  const [activeCategory, setActiveCategory] = useState(false);
  const handleCategoryToggle = () => {
    setActiveCategory(!activeCategory);
  };
  const [activeIndexCat, setActiveIndexCat] = useState(null);
  const handleCatClick = (index) => {
    setActiveIndexCat(activeIndexCat === index ? null : index);
  };

  return (
    <>
      <div className="overlay" />
      <div
        className={`side-overlay ${(menuActive || activeCategory) && "show"}`}
      />
      {/* ==================== Search Box Start Here ==================== */}

      <form action="#" className={`search-box ${activeSearch && "active"}`}>
        <button
          onClick={handleSearchToggle}
          type="button"
          className="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1"
        >
          <i className="ph ph-x" />
        </button>
        <div className="container">
          <div className="position-relative">
            <input
              type="text"
              className="form-control py-16 px-24 text-xl rounded-pill pe-64"
              placeholder="Search for a product or brand"
            />
            <button
              type="submit"
              className="w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
            >
              <i className="ph ph-magnifying-glass" />
            </button>
          </div>
        </div>
      </form>
      {/* ==================== Search Box End Here ==================== */}
      {/* ==================== Mobile Menu Start Here ==================== */}
      <div
        className={`mobile-menu scroll-sm d-lg-none d-block ${menuActive && "active"
          }`}
      >
        <button
          onClick={() => {
            handleMenuToggle();
            setActiveIndex(null);
          }}
          type="button"
          className="close-button"
        >
          <i className="ph ph-x" />{" "}
        </button>
        <div className="mobile-menu__inner">
          <Link href="/" className="mobile-menu__logo">
            <h3 className="mb-0 text-gray-900">APL Trading</h3>
          </Link>
          <div className="mobile-menu__menu">
            {/* Nav Menu Start */}
            <ul className="nav-menu flex-align nav-menu--mobile">
              <li className="nav-menu__item">
                <Link href="/shop" className="nav-menu__link">
                  Shop
                </Link>
              </li>
              <li className="nav-menu__item">
                <Link href="/account" className="nav-menu__link">
                  Account
                </Link>
              </li>
              <li className="nav-menu__item">
                <Link href="/cart" className="nav-menu__link">
                  Cart
                </Link>
              </li>
              <li className="nav-menu__item">
                <Link href="/compare" className="nav-menu__link">
                  Compare
                </Link>
              </li>
            </ul>
            {/* Nav Menu End */}
          </div>
        </div>
      </div>
      {/* ==================== Mobile Menu End Here ==================== */}
      {/* ======================= Middle Header Two Start ========================= */}
      <header
        className={`header header-middle style-two bg-color-neutral ${scroll ? "fixed-header" : ""}`}
      >
        <div className="container container-lg">
          <nav className="header-inner flex-between">
            {/* Logo Start */}
            <div className="logo">
              <Link href="/" className="link">
                <h3 className="mb-0 text-white">APL Trading</h3>
              </Link>
            </div>
            {/* Logo End  */}
            {/* form Category Start */}
            <div className="flex-align gap-16">
              <div className="select-dropdown-for-home-two d-lg-none d-block">
                {/* Dropdown Select Start */}
                <ul className="header-top__right style-two flex-align flex-wrap">
                  <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                    {/* Display the selected language */}
                    <Link
                      href="#"
                      className="selected-text text-white text-sm py-8"
                    >
                      {selectedLanguage}
                    </Link>
                    <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                      <li>
                        <Link
                          href="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleLanguageChange("English")}
                        >
                          <img
                            src="/assets/images/thumbs/flag1.png"
                            alt="English"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          English
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleLanguageChange("Japan")}
                        >
                          <img
                            src="/assets/images/thumbs/flag2.png"
                            alt="Japan"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Japan
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleLanguageChange("French")}
                        >
                          <img
                            src="/assets/images/thumbs/flag3.png"
                            alt="French"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          French
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleLanguageChange("Germany")}
                        >
                          <img
                            src="/assets/images/thumbs/flag4.png"
                            alt="Germany"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Germany
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleLanguageChange("Bangladesh")}
                        >
                          <img
                            src="/assets/images/thumbs/flag6.png"
                            alt="Bangladesh"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Bangladesh
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleLanguageChange("South Korea")}
                        >
                          <img
                            src="/assets/images/thumbs/flag5.png"
                            alt="South Korea"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          South Korea
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                    {/* Display the selected currency */}
                    <Link
                      href="#"
                      className="selected-text text-white text-sm py-8"
                    >
                      {selectedCurrency}
                    </Link>
                    <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                      <li>
                        <Link
                          href="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleCurrencyChange("USD")}
                        >
                          <img
                            src="/assets/images/thumbs/flag1.png"
                            alt="USD"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          USD
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleCurrencyChange("Yen")}
                        >
                          <img
                            src="/assets/images/thumbs/flag2.png"
                            alt="Yen"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Yen
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleCurrencyChange("Franc")}
                        >
                          <img
                            src="/assets/images/thumbs/flag3.png"
                            alt="Franc"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Franc
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleCurrencyChange("EURO")}
                        >
                          <img
                            src="/assets/images/thumbs/flag4.png"
                            alt="EURO"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          EURO
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleCurrencyChange("BDT")}
                        >
                          <img
                            src="/assets/images/thumbs/flag6.png"
                            alt="BDT"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          BDT
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleCurrencyChange("WON")}
                        >
                          <img
                            src="/assets/images/thumbs/flag5.png"
                            alt="WON"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          WON
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* Dropdown Select End */}
              </div>
              <form
                action="#"
                className="flex-align flex-wrap form-location-wrapper"
              >
                <div className="search-category style-two d-flex h-48 search-form d-sm-flex d-none">
                  <select
                    defaultValue={1}
                    className="js-example-basic-single border border-gray-200 border-end-0 rounded-0"
                    name="state"
                  >
                    <option value={1}>All Categories</option>
                    {b2bData.categories.map((cat, index) => (
                      <option key={index} value={index + 2}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
                  <div className="search-form__wrapper position-relative">
                    <input
                      type="text"
                      className="search-form__input common-input py-13 ps-16 pe-18 rounded-0 border-0"
                      placeholder="Search for a product or brand"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-main-two-600 flex-center text-xl text-white flex-shrink-0 w-48 hover-bg-main-two-700 d-lg-flex d-none"
                  >
                    <i className="ph ph-magnifying-glass" />
                  </button>
                </div>
              </form>
            </div>
            {/* form Category start */}
            {/* Header Middle Right start */}
            <div className="header-right flex-align">
              <div className="header-two-activities flex-align flex-wrap gap-16 gap-lg-32">
                {/* Search Toggle (Mobile) */}
                <button
                  type="button"
                  onClick={handleSearchToggle}
                  className="flex-align search-icon d-lg-none d-flex gap-4 item-hover-two"
                >
                  <span className="text-2xl text-white d-flex position-relative item-hover__text">
                    <i className="ph ph-magnifying-glass" />
                  </span>
                </button>
                {/* Profile (Desktop) */}
                <Link
                  href="/account"
                  className="flex-align flex-column gap-8 item-hover-two d-none d-lg-flex"
                >
                  <span className="text-2xl text-white d-flex position-relative item-hover__text">
                    <i className="ph ph-user" />
                  </span>
                  <span className="text-md text-white item-hover__text d-none d-lg-flex">
                    Profile
                  </span>
                </Link>

                {/* Compare (Desktop) */}
                <Link
                  href="/compare"
                  className="flex-align flex-column gap-8 item-hover-two d-none d-lg-flex"
                >
                  <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                    <i className="ph-fill ph-shuffle" />
                    <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                      2
                    </span>
                  </span>
                  <span className="text-md text-white item-hover__text d-none d-lg-flex">
                    Compare
                  </span>
                </Link>
                {/* Cart (Desktop & Mobile) */}
                <Link
                  href="/cart"
                  className="flex-align flex-column gap-8 item-hover-two"
                >
                  <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                    <i className="ph ph-shopping-cart-simple" />
                    <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                      2
                    </span>
                  </span>
                  <span className="text-md text-white item-hover__text d-none d-lg-flex">
                    Cart
                  </span>
                </Link>
                {/* Mobile Menu Toggle */}
                <button
                  type="button"
                  onClick={handleMenuToggle}
                  className="flex-align d-lg-none d-flex gap-4 item-hover-two"
                >
                  <span className="text-2xl text-white d-flex position-relative item-hover__text">
                    <i className="ph ph-list" />
                  </span>
                </button>
              </div>
            </div>
            {/* Header Middle Right End  */}
          </nav>
        </div>
      </header>
      {/* ======================= Middle Header Two End ========================= */}
    </>
  );
};

export default HeaderTwo;
