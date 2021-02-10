import Category from "components/Category";
import FeaturedProducts from "components/FeaturedProducts";
import Footer from "components/Footer";
import Hero from "components/Hero";
import LatestProducts from "components/LatestProducts";
import Promo from "components/Promo";
import Testimonials from "components/Testimonials";
import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Category />
      <FeaturedProducts />
      <LatestProducts />
      <Promo />
      <Testimonials />
      <Footer />
    </div>
  );
}
