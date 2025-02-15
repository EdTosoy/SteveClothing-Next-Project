import Footer from "components/Footer";
import Header from "components/Header";
import Products from "components/products";
import React from "react";
import Head from "next/head";

export default function products() {
  return (
    <div>
      <Head>
        <title>SteveClothing | Shop</title>
        <meta
          name="description"
          content="Our menu is constantly evolving, yet always abides by a few simple constants. All of our cooking revolves around open wood fire. We work with a small group of fisherman, hunters, gatherers, ranchers, and farmers to find and follow microclimates that produce specific tastes from wild foods. Lastly, we steer clear of imported and commercial goods, opting instead to build our own pantry through patient harvesting and preservation."
        />
      </Head>
      <Header />
      <Products />
      <Footer />
    </div>
  );
}
