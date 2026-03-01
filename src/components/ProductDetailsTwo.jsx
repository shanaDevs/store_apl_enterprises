"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import b2bData from "@/data/b2b-data.json";
import ProductCard from "./ProductCard";

import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const ProductDetailsTwo = () => {
  const params = useParams();
  const product =
    b2bData.products.find((p) => p.slug === params.slug) || b2bData.products[0];

  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const loadCountdown = async () => {
      const { getCountdown } = await import("../helper/Countdown");
      setTimeLeft(getCountdown());
    };
    loadCountdown();
    const interval = setInterval(() => {
      loadCountdown();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [quantity, setQuantity] = useState(product.moq || 1);
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () =>
    setQuantity(quantity > (product.moq || 1) ? quantity - 1 : quantity);
  const [mainImage, setMainImage] = useState(productImages[0]);

  const settingsThumbs = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  // Related products (same category, exclude self)
  const relatedProducts = b2bData.products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <section className="product-details py-80">
      <div className="container container-lg">
        <div className="row gy-4">
          <div className="col-xl-9">
            <div className="row gy-4">
              {/* Product Image Gallery */}
              <div className="col-xl-6">
                <div className="product-details__left">
                  <div className="product-details__thumb-slider border border-gray-100 rounded-16">
                    <div className="">
                      <div className="product-details__thumb flex-center h-100">
                        <img src={mainImage} alt={product.name} />
                      </div>
                    </div>
                  </div>
                  <div className="mt-24">
                    <div className="product-details__images-slider">
                      <Slider {...settingsThumbs}>
                        {productImages.map((image, index) => (
                          <div
                            className="center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8"
                            key={index}
                            onClick={() => setMainImage(image)}
                          >
                            <img
                              className="thum"
                              src={image}
                              alt={`View ${index + 1}`}
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="col-xl-6">
                <div className="product-details__content">
                  {/* Offer Banner */}
                  <div className="flex-center mb-24 flex-wrap gap-16 bg-color-one rounded-8 py-16 px-24 position-relative z-1">
                    <img
                      src="/assets/images/bg/details-offer-bg.png"
                      alt=""
                      className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1"
                    />
                    <div className="flex-align gap-16">
                      <span className="text-white text-sm">
                        Limited Time Offer:
                      </span>
                    </div>
                    <div className="countdown" id="countdown11">
                      <ul className="countdown-list flex-align flex-wrap">
                        <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                          {timeLeft.days}
                          <span className="days" />
                        </li>
                        <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                          {timeLeft.hours}
                          <span className="hours" />
                        </li>
                        <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                          {timeLeft.minutes}
                          <span className="minutes" />
                        </li>
                        <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                          {timeLeft.seconds}
                          <span className="seconds" />
                        </li>
                      </ul>
                    </div>
                    <span className="text-white text-xs">
                      Offer expires soon
                    </span>
                  </div>

                  <h5 className="mb-12">{product.name}</h5>

                  {/* Ratings & SKU */}
                  <div className="flex-align flex-wrap gap-12">
                    <div className="flex-align gap-12 flex-wrap">
                      <div className="flex-align gap-8">
                        {[...Array(Math.floor(product.rating))].map((_, i) => (
                          <span
                            key={i}
                            className="text-15 fw-medium text-warning-600 d-flex"
                          >
                            <i className="ph-fill ph-star" />
                          </span>
                        ))}
                      </div>
                      <span className="text-sm fw-medium text-neutral-600">
                        {product.rating} Rating
                      </span>
                      <span className="text-sm fw-medium text-gray-500">
                        ({product.reviews} Reviews)
                      </span>
                    </div>
                    <span className="text-sm fw-medium text-gray-500">|</span>
                    <span className="text-gray-900">
                      <span className="text-gray-400">SKU: </span>
                      {product.sku}
                    </span>
                    <span className="text-sm fw-medium text-gray-500">|</span>
                    <span className="text-gray-900">
                      <span className="text-gray-400">Vendor: </span>
                      {product.vendor}
                    </span>
                  </div>

                  <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                  <p className="text-gray-700">{product.description}</p>

                  {/* Pricing */}
                  <div className="my-32 flex-align gap-16 flex-wrap">
                    <div className="flex-align gap-8">
                      <h6 className="mb-0">{product.price}</h6>
                      <span className="text-gray-500 text-sm">per unit</span>
                    </div>
                  </div>

                  {/* B2B Info */}
                  <div className="my-32 flex-align flex-wrap gap-12">
                    <span className="px-12 py-8 text-sm rounded-8 flex-align gap-8 text-gray-900 border border-gray-200">
                      <i className="ph ph-package text-main-600" />
                      MOQ: {product.moq} Units
                    </span>
                    <span className="px-12 py-8 text-sm rounded-8 flex-align gap-8 text-gray-900 border border-gray-200">
                      <i className="ph ph-tag text-main-600" />
                      Category: {product.category}
                    </span>
                    <span
                      className={`px-12 py-8 text-sm rounded-8 flex-align gap-8 border ${product.availability === "In Stock" ? "text-success-600 border-success-200" : "text-warning-600 border-warning-200"}`}
                    >
                      <i className="ph ph-check-circle" />
                      {product.availability}
                    </span>
                  </div>

                  <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />

                  {/* WhatsApp CTA */}
                  <Link
                    href="https://www.whatsapp.com"
                    className="btn btn-black flex-center gap-8 rounded-8 py-16"
                  >
                    <i className="ph ph-whatsapp-logo text-lg" />
                    Request More Information
                  </Link>

                  <div className="mt-32">
                    <span className="fw-medium text-gray-900">
                      100% Verified Suppliers
                    </span>
                    <div className="mt-10">
                      <img src="/assets/images/thumbs/gateway-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-xl-3">
            <div className="product-details__sidebar py-40 px-32 border border-gray-100 rounded-16">
              <div className="mb-32">
                <label
                  htmlFor="region"
                  className="h6 mb-8 text-heading fw-semibold d-block"
                >
                  Shipping Region
                </label>
                <div className="flex-align border border-gray-100 rounded-4 px-16">
                  <span className="text-xl d-flex text-main-600">
                    <i className="ph ph-map-pin" />
                  </span>
                  <select
                    defaultValue={1}
                    className="common-input border-0 px-8 rounded-4"
                    id="region"
                  >
                    <option value={1}>North America</option>
                    <option value={2}>Europe</option>
                    <option value={3}>Asia Pacific</option>
                    <option value={4}>Middle East & Africa</option>
                  </select>
                </div>
              </div>
              <div className="mb-32">
                <label
                  htmlFor="stock"
                  className="text-lg mb-8 text-heading fw-semibold d-block"
                >
                  Quantity (MOQ: {product.moq})
                </label>
                <div className="d-flex rounded-4 overflow-hidden">
                  <button
                    onClick={decrementQuantity}
                    type="button"
                    className="quantity__minus flex-shrink-0 h-48 w-48 text-neutral-600 bg-gray-50 flex-center hover-bg-main-600 hover-text-white"
                  >
                    <i className="ph ph-minus" />
                  </button>
                  <input
                    type="number"
                    className="quantity__input flex-grow-1 border border-gray-100 border-start-0 border-end-0 text-center w-32 px-16"
                    id="stock"
                    value={quantity}
                    readOnly
                  />
                  <button
                    onClick={incrementQuantity}
                    type="button"
                    className="quantity__plus flex-shrink-0 h-48 w-48 text-neutral-600 bg-gray-50 flex-center hover-bg-main-600 hover-text-white"
                  >
                    <i className="ph ph-plus" />
                  </button>
                </div>
              </div>
              <div className="mb-32">
                <div className="flex-between flex-wrap gap-8 border-bottom border-gray-100 pb-16 mb-16">
                  <span className="text-gray-500">Unit Price</span>
                  <h6 className="text-lg mb-0">{product.price}</h6>
                </div>
                <div className="flex-between flex-wrap gap-8">
                  <span className="text-gray-500">Shipping</span>
                  <h6 className="text-lg mb-0">Quote on Request</h6>
                </div>
              </div>
              <Link
                href="/cart"
                className="btn btn-main flex-center gap-8 rounded-8 py-16 fw-normal mt-48"
              >
                <i className="ph ph-shopping-cart-simple text-lg" />
                Add To Inquiry
              </Link>
              <Link
                href="#"
                className="btn btn-outline-main rounded-8 py-16 fw-normal mt-16 w-100"
              >
                Request Quote
              </Link>
              <div className="mt-32">
                <div className="px-16 py-8 bg-main-50 rounded-8 flex-between gap-24 mb-14">
                  <span className="w-32 h-32 bg-white text-main-600 rounded-circle flex-center text-xl flex-shrink-0">
                    <i className="ph-fill ph-truck" />
                  </span>
                  <span className="text-sm text-neutral-600">
                    Shipped via{" "}
                    <span className="fw-semibold">APL Trading Logistics</span>
                  </span>
                </div>
                <div className="px-16 py-8 bg-main-50 rounded-8 flex-between gap-24 mb-0">
                  <span className="w-32 h-32 bg-white text-main-600 rounded-circle flex-center text-xl flex-shrink-0">
                    <i className="ph-fill ph-storefront" />
                  </span>
                  <span className="text-sm text-neutral-600">
                    Sold by:{" "}
                    <span className="fw-semibold">{product.vendor}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="pt-80">
          <div className="product-dContent border rounded-24">
            <div className="product-dContent__header border-bottom border-gray-100 flex-between flex-wrap gap-16">
              <ul
                className="nav common-tab nav-pills mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-description-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-description"
                    type="button"
                    role="tab"
                    aria-controls="pills-description"
                    aria-selected="true"
                  >
                    Description
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-specs-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-specs"
                    type="button"
                    role="tab"
                    aria-controls="pills-specs"
                    aria-selected="false"
                  >
                    Specifications
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-reviews-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-reviews"
                    type="button"
                    role="tab"
                    aria-controls="pills-reviews"
                    aria-selected="false"
                  >
                    Reviews
                  </button>
                </li>
              </ul>
              <Link
                href="#"
                className="btn bg-color-one rounded-16 flex-align gap-8 text-main-600 hover-bg-main-600 hover-text-white"
              >
                <img src="/assets/images/icon/satisfaction-icon.png" alt="" />
                100% Verified Suppliers
              </Link>
            </div>
            <div className="product-dContent__box">
              <div className="tab-content" id="pills-tabContent">
                {/* Description Tab */}
                <div
                  className="tab-pane fade show active"
                  id="pills-description"
                  role="tabpanel"
                  aria-labelledby="pills-description-tab"
                  tabIndex={0}
                >
                  <div className="mb-40">
                    <h6 className="mb-24">Product Description</h6>
                    <p>{product.description}</p>
                  </div>
                </div>

                {/* Specifications Tab */}
                <div
                  className="tab-pane fade"
                  id="pills-specs"
                  role="tabpanel"
                  aria-labelledby="pills-specs-tab"
                  tabIndex={0}
                >
                  <div className="mb-40">
                    <h6 className="mb-24">Product Specifications</h6>
                    <ul className="mt-32">
                      {[
                        ["Product Name", product.name],
                        ["SKU", product.sku],
                        ["Category", product.category],
                        ["Vendor", product.vendor],
                        ["Availability", product.availability],
                        ["Minimum Order Quantity", `${product.moq} Units`],
                        ["Unit Price", product.price],
                        ["Star Rating", `${product.rating} / 5.0`],
                      ].map(([label, value]) => (
                        <li
                          key={label}
                          className="text-gray-400 mb-14 flex-align gap-14"
                        >
                          <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                            <i className="ph ph-check" />
                          </span>
                          <span className="text-heading fw-medium">
                            {label}:{" "}
                            <span className="text-gray-500">{value}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Reviews Tab */}
                <div
                  className="tab-pane fade"
                  id="pills-reviews"
                  role="tabpanel"
                  aria-labelledby="pills-reviews-tab"
                  tabIndex={0}
                >
                  <div className="row g-4">
                    <div className="col-12">
                      <h6 className="mb-24">Buyer Reviews</h6>
                      <p className="text-gray-500">
                        This product has received{" "}
                        <strong>{product.reviews}</strong> verified buyer
                        reviews with an average rating of{" "}
                        <strong>{product.rating}/5.0</strong>.
                      </p>
                      <p className="text-gray-400 mt-16">
                        Verified purchase reviews from confirmed B2B buyers will
                        appear here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-80">
            <h5 className="mb-40">Related Products in {product.category}</h5>
            <div className="row g-4">
              {relatedProducts.map((rp) => (
                <div key={rp.id} className="col-lg-3 col-sm-6">
                  <ProductCard product={rp} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetailsTwo;
