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
      <Head>
        <title>SteveCLothing</title>
        <meta
          name="description"
          content="Our menu is constantly evolving, yet always abides by a few simple constants. All of our cooking revolves around open wood fire. We work with a small group of fisherman, hunters, gatherers, ranchers, and farmers to find and follow microclimates that produce specific tastes from wild foods. Lastly, we steer clear of imported and commercial goods, opting instead to build our own pantry through patient harvesting and preservation."
        />
      </Head>
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
