import React from "react";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
      <Link
        href={`/view/${product.slug}`}
        className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-100 h-100 object-fit-cover"
        />
        <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
          {product.availability === "In Stock" ? "In Stock" : "Pre-order"}
        </span>
      </Link>
      <div className="product-card__content mt-16">
        <h6 className="title text-lg fw-semibold mt-12 mb-8">
          <Link
            href={`/view/${product.slug}`}
            className="link text-line-2"
            tabIndex={0}
          >
            {product.name}
          </Link>
        </h6>
        <div className="flex-align mb-20 mt-16 gap-6">
          <span className="text-xs fw-medium text-gray-500">
            {product.rating}
          </span>
          <span className="text-15 fw-medium text-warning-600 d-flex">
            <i className="ph-fill ph-star" />
          </span>
          <span className="text-xs fw-medium text-gray-500">
            ({product.reviews})
          </span>
        </div>

        <div className="mt-8">
          <span className="text-gray-900 text-xs fw-medium mt-8">
            Vendor: {product.vendor}
          </span>
          <br />
          <span className="text-gray-900 text-xs fw-medium mt-8">
            MOQ: {product.moq} Units
          </span>
        </div>
        <div className="product-card__price my-20">
          <span className="text-heading text-md fw-semibold ">
            {product.price}{" "}
            <span className="text-gray-500 fw-normal">/Qty</span>{" "}
          </span>
        </div>
        <Link
          href="/cart"
          className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
          tabIndex={0}
        >
          Add To Inquiry <i className="ph ph-shopping-cart" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
