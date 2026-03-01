import CompareMatrix from "@/components/CompareMatrix";
import HeaderTwo from "@/components/HeaderTwo";
import FooterTwo from "@/components/FooterTwo";
import Breadcrumb from "@/components/Breadcrumb";
import Preloader from "@/helper/Preloader";
import ColorInit from "@/helper/ColorInit";
import ScrollToTopInit from "@/helper/ScrollToTopInit";

export const metadata = {
  title: "B2B Compare Matrix - APL Trading",
  description:
    "Horizontal Custom Product Compare Matrix for industrial sourcing.",
};

const page = () => {
  return (
    <>
      <ColorInit color={true} />
      <ScrollToTopInit color="#FA6400" />
      <Preloader />

      <HeaderTwo category={false} />
      <Breadcrumb title={"Product Compare Matrix"} />

      <CompareMatrix />

      <FooterTwo />
    </>
  );
};

export default page;
