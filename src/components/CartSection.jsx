"use client";

import React from "react";
import Link from "next/link";
import QuantityControl from "../helper/QuantityControl";
import b2bData from "@/data/b2b-data.json";

const CartSection = () => {
  // Show first 3 products as sample cart items (in real app, cart state would drive this)
  const cartItems = b2bData.products.slice(0, 3);

  return (
    <section className="cart py-80">
      <div className="container container-lg">
        <div className="row gy-4">
          <div className="col-xl-9 col-lg-8">
            <div className="cart-table border border-gray-100 rounded-8 px-40 py-48">
              <div className="overflow-x-auto scroll-sm scroll-sm-horizontal">
                <table className="table style-three">
                  <thead>
                    <tr>
                      <th className="h6 mb-0 text-lg fw-bold">Remove</th>
                      <th className="h6 mb-0 text-lg fw-bold">Product Name</th>
                      <th className="h6 mb-0 text-lg fw-bold">Unit Price</th>
                      <th className="h6 mb-0 text-lg fw-bold">Quantity</th>
                      <th className="h6 mb-0 text-lg fw-bold">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <button
                            type="button"
                            className="remove-tr-btn flex-align gap-12 hover-text-danger-600"
                          >
                            <i className="ph ph-x-circle text-2xl d-flex" />
                            Remove
                          </button>
                        </td>
                        <td>
                          <div className="table-product d-flex align-items-center gap-24">
                            <Link
                              href={`/view/${item.slug}`}
                              className="table-product__thumb border border-gray-100 rounded-8 flex-center"
                            >
                              <img src={item.image} alt={item.name} />
                            </Link>
                            <div className="table-product__content text-start">
                              <h6 className="title text-lg fw-semibold mb-8">
                                <Link
                                  href={`/view/${item.slug}`}
                                  className="link text-line-2"
                                  tabIndex={0}
                                >
                                  {item.name}
                                </Link>
                              </h6>
                              <div className="flex-align gap-16 mb-16">
                                <div className="flex-align gap-6">
                                  <span className="text-md fw-medium text-warning-600 d-flex">
                                    <i className="ph-fill ph-star" />
                                  </span>
                                  <span className="text-md fw-semibold text-gray-900">
                                    {item.rating}
                                  </span>
                                </div>
                                <span className="text-sm fw-medium text-gray-200">
                                  |
                                </span>
                                <span className="text-neutral-600 text-sm">
                                  {item.reviews} Reviews
                                </span>
                              </div>
                              <span className="text-xs text-gray-500">
                                Vendor: {item.vendor}
                              </span>
                              <br />
                              <span className="text-xs text-gray-500">
                                SKU: {item.sku}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-lg h6 mb-0 fw-semibold">
                            {item.price}
                          </span>
                        </td>
                        <td>
                          <QuantityControl initialQuantity={item.moq} />
                        </td>
                        <td>
                          <span className="text-lg h6 mb-0 fw-semibold">
                            {item.price}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex-between flex-wrap gap-16 mt-16">
                <div className="flex-align gap-16">
                  <input
                    type="text"
                    className="common-input"
                    placeholder="Promo / RFQ Code"
                  />
                  <button
                    type="submit"
                    className="btn btn-main py-18 w-100 rounded-8"
                  >
                    Apply Code
                  </button>
                </div>
                <button
                  type="submit"
                  className="text-lg text-gray-500 hover-text-main-600"
                >
                  Update Inquiry
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="cart-sidebar border border-gray-100 rounded-8 px-24 py-40">
              <h6 className="text-xl mb-32">Inquiry Summary</h6>
              <div className="bg-color-three rounded-8 p-24">
                <div className="mb-32 flex-between gap-8">
                  <span className="text-gray-900 font-heading-two">Items</span>
                  <span className="text-gray-900 fw-semibold">
                    {cartItems.length} Products
                  </span>
                </div>
                <div className="mb-32 flex-between gap-8">
                  <span className="text-gray-900 font-heading-two">
                    Estimated Shipping
                  </span>
                  <span className="text-gray-900 fw-semibold">
                    Quote on Request
                  </span>
                </div>
                <div className="mb-0 flex-between gap-8">
                  <span className="text-gray-900 font-heading-two">
                    Taxes & Duties
                  </span>
                  <span className="text-gray-900 fw-semibold">
                    Varies by Region
                  </span>
                </div>
              </div>
              <div className="bg-color-three rounded-8 p-24 mt-24">
                <div className="flex-between gap-8">
                  <span className="text-gray-900 text-xl fw-semibold">
                    Total
                  </span>
                  <span className="text-gray-900 text-xl fw-semibold">
                    On Request
                  </span>
                </div>
              </div>
              <Link
                href="/account"
                className="btn btn-main mt-40 py-18 w-100 rounded-8"
              >
                Submit Inquiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
