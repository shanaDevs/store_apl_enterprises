"use client";
import React from "react";
import Link from "next/link";

const CompareMatrix = () => {
  const formatHugeNumber = (num) => {
    // Beautiful formatter for massive numbers
    if (num >= 1e9) {
      return (num / 1e9).toFixed(2) + " Billion";
    }
    if (num >= 1e6) {
      return (num / 1e6).toFixed(2) + " Million";
    }
    return new Intl.NumberFormat().format(num);
  };

  return (
    <section className="compare-matrix py-80">
      <div className="container container-lg">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-24 fw-bold">
              B2B Product Specifications Compare Matrix
            </h2>
            <p className="mb-40 text-gray-600">
              Analyze industrial products side-by-side to make informed
              bulk-purchasing decisions.
            </p>

            <div className="table-responsive border border-gray-100 rounded-16">
              <table className="table bg-white text-center align-middle mb-0">
                <thead className="bg-gray-50 border-bottom border-gray-100">
                  <tr>
                    <th scope="col" className="p-24 text-start fw-bold w-25">
                      Specifications
                    </th>
                    <th
                      scope="col"
                      className="p-24 border-start border-gray-100 w-25"
                    >
                      <img
                        src="/assets/images/b2b_products/product_steel_coils.png"
                        alt="Steel Coils"
                        className="mb-16 rounded-8 mx-auto d-block"
                        style={{ maxHeight: "120px" }}
                      />
                      <h5 className="text-lg">
                        High-Tensile Industrial Steel Coils
                      </h5>
                    </th>
                    <th
                      scope="col"
                      className="p-24 border-start border-gray-100 w-25"
                    >
                      <img
                        src="/assets/images/b2b_products/product_solar_panels.png"
                        alt="Solar Panels"
                        className="mb-16 rounded-8 mx-auto d-block"
                        style={{ maxHeight: "120px" }}
                      />
                      <h5 className="text-lg">
                        Commercial Solar Panels (500W)
                      </h5>
                    </th>
                    <th
                      scope="col"
                      className="p-24 border-start border-gray-100 w-25"
                    >
                      <img
                        src="/assets/images/b2b_products/product_auto_parts.png"
                        alt="Auto Parts"
                        className="mb-16 rounded-8 mx-auto d-block"
                        style={{ maxHeight: "120px" }}
                      />
                      <h5 className="text-lg">
                        OEM Commercial Vehicle Springs
                      </h5>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-bottom border-gray-100">
                    <td className="p-24 text-start fw-semibold text-gray-700 bg-gray-50">
                      Estimated Unit Price
                    </td>
                    <td className="p-24 border-start border-gray-100 fw-bold text-main-600">
                      $850 / Metric Ton
                    </td>
                    <td className="p-24 border-start border-gray-100 fw-bold text-main-600">
                      $120 / Panel
                    </td>
                    <td className="p-24 border-start border-gray-100 fw-bold text-main-600">
                      $45 / Unit
                    </td>
                  </tr>
                  <tr className="border-bottom border-gray-100">
                    <td className="p-24 text-start fw-semibold text-gray-700 bg-gray-50">
                      Minimum Order Qty (MOQ)
                    </td>
                    <td className="p-24 border-start border-gray-100">
                      50 Metric Tons
                    </td>
                    <td className="p-24 border-start border-gray-100">
                      500 Panels
                    </td>
                    <td className="p-24 border-start border-gray-100">
                      1,000 Units
                    </td>
                  </tr>
                  <tr className="border-bottom border-gray-100">
                    <td className="p-24 text-start fw-semibold text-gray-700 bg-gray-50">
                      Global Supply Capacity
                    </td>
                    <td className="p-24 border-start border-gray-100 text-gray-900">
                      {formatHugeNumber(5500000)} Tons / Year
                    </td>
                    <td className="p-24 border-start border-gray-100 text-gray-900">
                      {formatHugeNumber(12000000)} Panels / Year
                    </td>
                    <td className="p-24 border-start border-gray-100 text-gray-900">
                      {formatHugeNumber(8500000)} Units / Year
                    </td>
                  </tr>
                  <tr className="border-bottom border-gray-100">
                    <td className="p-24 text-start fw-semibold text-gray-700 bg-gray-50">
                      Certifications
                    </td>
                    <td className="p-24 border-start border-gray-100">
                      ISO 9001, CE, ASTM
                    </td>
                    <td className="p-24 border-start border-gray-100">
                      TUV, UL, CE, ISO 14001
                    </td>
                    <td className="p-24 border-start border-gray-100">
                      IATF 16949, ISO 9001
                    </td>
                  </tr>
                  <tr className="border-bottom border-gray-100">
                    <td className="p-24 text-start fw-semibold text-gray-700 bg-gray-50">
                      Lead Time
                    </td>
                    <td className="p-24 border-start border-gray-100">
                      14-21 Days
                    </td>
                    <td className="p-24 border-start border-gray-100">
                      25-30 Days
                    </td>
                    <td className="p-24 border-start border-gray-100">
                      30-45 Days
                    </td>
                  </tr>
                  <tr className="border-bottom border-gray-100">
                    <td className="p-24 text-start fw-semibold text-gray-700 bg-gray-50">
                      Origin / Shipment Port
                    </td>
                    <td className="p-24 border-start border-gray-100">
                      Shanghai, CN
                    </td>
                    <td className="p-24 border-start border-gray-100">
                      Shenzhen, CN
                    </td>
                    <td className="p-24 border-start border-gray-100">
                      Mumbai, IN
                    </td>
                  </tr>
                  <tr>
                    <td className="p-24 text-start fw-semibold text-gray-700 bg-gray-50">
                      Action
                    </td>
                    <td className="p-24 border-start border-gray-100">
                      <button className="btn btn-main py-12 px-24 fw-medium rounded-8">
                        Add To Inquiry
                      </button>
                    </td>
                    <td className="p-24 border-start border-gray-100">
                      <button className="btn btn-main py-12 px-24 fw-medium rounded-8">
                        Add To Inquiry
                      </button>
                    </td>
                    <td className="p-24 border-start border-gray-100">
                      <button className="btn btn-main py-12 px-24 fw-medium rounded-8">
                        Add To Inquiry
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareMatrix;
