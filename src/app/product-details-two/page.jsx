import { Suspense } from "react";
import BottomFooter from "@/components/BottomFooter";
import Breadcrumb from "@/components/Breadcrumb";
import FooterTwo from "@/components/FooterTwo";
import HeaderTwo from "@/components/HeaderTwo";
import NewArrivalTwo from "@/components/NewArrivalTwo";
import NewsletterOne from "@/components/NewsletterOne";
import ProductDetailsTwo from "@/components/ProductDetailsTwo";
import ShippingOne from "@/components/ShippingOne";
import ColorInit from "@/helper/ColorInit";
import Preloader from "@/helper/Preloader";
import ScrollToTopInit from "@/helper/ScrollToTopInit";

export const metadata = {
  title: "APL Trading - B2B Product Sourcing Marketplace",
  description:
    "APL Trading is a B2B product sourcing and inquiry marketplace. Browse and request quotes for industrial products, raw materials, electronics, and more.",
};

const page = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTopInit color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderTwo category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Product Details"} />

      {/* ProductDetailsTwo — wrapped in Suspense for useSearchParams */}
      <Suspense
        fallback={<div className="py-80 text-center">Loading product...</div>}
      >
        <ProductDetailsTwo />
      </Suspense>

      {/* NewArrivalTwo */}
      <NewArrivalTwo />

      {/* ShippingOne */}
      <ShippingOne />

      {/* NewsletterOne */}
      <NewsletterOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default page;
