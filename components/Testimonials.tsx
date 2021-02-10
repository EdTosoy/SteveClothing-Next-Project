import React from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Will Smith",
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, fugiat labore. Veritatis et omnis consequatur",
      img: "/images/profile1.jpg",
    },
    {
      name: "Will Smith",
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, fugiat labore. Veritatis et omnis consequatur",
      img: "/images/profile2.jpg",
    },
    {
      name: "Will Smith",
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, fugiat labore. Veritatis et omnis consequatur",
      img: "/images/profile3.jpg",
    },
  ];
  const partners = [
    "/images/brand1.png",
    "/images/brand2.png",
    "/images/brand1.png",
    "/images/brand2.png",
  ];
  return (
    <section className="-mt-10 grid-container pb-20 ">
      <main className="col-start-2 col-end-3 grid gap-12 grid-cols-3">
        {testimonials.map(({ img, name, text }) => (
          <div className="rounded-2xl py-12  px-8 transform hover:-translate-y-5 border text-center font-medium z-40 bg-white shadow-md ">
            <h1 className="font-semibold text-9xl leading-10 text-pink-500 font-serif  ">
              “
            </h1>
            <p>{text}</p>
            <div className="grid place-content-center my-3 ">
              <Image
                src={img}
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <cite className="text-base"> - {name}</cite>
          </div>
        ))}
        <div className="col-span-full flex justify-around mt-10 ">
          {partners.map((img) => (
            <div className="grid place-content-center">
              <Image src={img} width={80} height={80} />
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
