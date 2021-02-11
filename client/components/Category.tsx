import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Category() {
  const categories = [
    {
      name: "Girls  Clothing",
      img: "category-1-bg",
      text: "Worlds Best Brands",
      bgColor: "bg-pink-300",
    },
    {
      name: "Summer Clothing",
      img: "category-2-bg",
      text: "Worlds Best Brands",
      bgColor: "bg-blue-300 ",
    },
    {
      name: "Boys Clothing",
      img: "category-3-bg",
      text: "Worlds Best Brands",
      bgColor: "bg-yellow-400",
    },
  ];
  return (
    <section className="grid-container py-20 sm:py-32">
      <main className="col-start-2 col-end-3 sm:px-8 md:grid  md:grid-cols-3 gap-6">
        {categories.map(({ img, name, text, bgColor }) => (
          <Link href="/products" key={name}>
            <div
              className={`${bgColor} bg-${img}   bg-left -left-8 bg-contain bg-no-repeat rounded-xl p-4 cursor-pointer transform hover:scale-105 mb-8 `}
            >
              <div className="border-dashed h-56 rounded-xl p-4 border-white grid items-center justify-end border-2">
                <div className="w-40  text-white ">
                  <h1 className="text-4xl">{name}</h1>
                  <p className="text-base mt-3">{text}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </section>
  );
}
