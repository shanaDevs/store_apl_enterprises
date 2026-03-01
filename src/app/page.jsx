import { redirect } from "next/navigation";

export const metadata = {
  title: "APL Trading - B2B Sourcing Marketplace",
  description: "APL Trading B2B Product Inquiry Marketplace",
};

const page = () => {
  redirect("/shop");
};

export default page;
