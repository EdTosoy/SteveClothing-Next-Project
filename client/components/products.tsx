import React from "react";
import Image from "next/image";

export default function Products() {
  const featuredProducts = [
    {
      name: "Boy's T-Shirt",
      img: "/images/pic1.jpg",
      price: "50",
    },
    {
      name: "Boy's T-Shirt",
      img: "/images/pic2.jpg",
      price: "50",
    },
    {
      name: "Boy's T-Shirt",
      img: "/images/pic3.jpg",
      price: "50",
    },
    {
      name: "Boy's T-Shirt",
      img: "/images/pic4.jpg",
      price: "50",
    },
    {
      name: "Boy's T-Shirt",
      img: "/images/pic1.jpg",
      price: "50",
    },
    {
      name: "Boy's T-Shirt",
      img: "/images/pic2.jpg",
      price: "50",
    },
    {
      name: "Boy's T-Shirt",
      img: "/images/pic3.jpg",
      price: "50",
    },
    {
      name: "Boy's T-Shirt",
      img: "/images/pic4.jpg",
      price: "50",
    },
  ];
  return (
    <section className="grid-container py-24   font-semibold    ">
      <main className="col-start-2 col-end-3">
        <div className="flex items-center justify-between mb-10 ">
          <h1 className=" text-lg md:text-2xl">All Products</h1>
          <select
            name="filter"
            id="filter"
            className="border text-black text-base py-2   px-2  md:px-6 "
          >
            <option value="Default Sorting" defaultValue="true">
              Default Sorting
            </option>
            <option value="sort by popularity">sort by popularity</option>
            <option value="sort by price">sort by price</option>
            <option value="sort by rating">sort by rating</option>
            <option value="sort by sale">sort by sale</option>
          </select>
        </div>
        <div className="col-start-2 col-end-3 grid  grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map(({ img, name, price }) => (
            <div className="hover:bg-black rounded-xl  overflow-hidden shadow-lg mb-10 ">
              <div className="grid place-content-center hover:opacity-90  relative">
                <Image src={img} width={300} height={400} alt={name} />
                <div className="absolute right-0 top-1/2 z-40 opacity-100 ">
                  <div className="grid place-content-center p-4 cursor-pointer my-1 rounded-full bg-white hover:bg-pink-500  ">
                    <box-icon name="heart"></box-icon>
                  </div>
                  <div className="grid place-content-center p-4 cursor-pointer my-1 rounded-full bg-white hover:bg-pink-500  ">
                    <box-icon name="shopping-bag"></box-icon>
                  </div>
                </div>
              </div>
              <div className="py-6 bg-white text-center">
                <h1 className="text-base sm:text-2xl">{name}</h1>
                <div className="flex justify-center my-1">
                  <box-icon
                    name="star"
                    color="#43b3d9"
                    type="solid"
                    size="18px"
                  ></box-icon>
                  <box-icon
                    name="star"
                    color="#43b3d9"
                    type="solid"
                    size="18px"
                  ></box-icon>
                  <box-icon
                    name="star"
                    color="#43b3d9"
                    type="solid"
                    size="18px"
                  ></box-icon>
                  <box-icon
                    name="star"
                    color="#43b3d9"
                    type="solid"
                    size="18px"
                  ></box-icon>
                  <box-icon name="star" color="#43b3d9" size="18px"></box-icon>
                </div>
                <p className="text-red-400 text-xl font  ">${price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
