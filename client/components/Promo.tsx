import React from "react";
import Image from "next/image";

export default function Promo() {
  return (
    <section className="">
      <main className=" flex items-start justify-between">
        <div className="w-1/2 relative hidden md:block ">
          <Image src="/images/test.jpg" width={800} height={700} alt="promo" />
        </div>
        <div className="w-full md:w-1/2 bg-blue-900 pt-20 md:pt-40 pb-20 ">
          <div className="text-center  ">
            <p className="text-3xl mb-4 text-yellow-500 ">
              70% <span className="text-purple-400">SALE OFF</span>
            </p>
            <h1 className="text-3xl md:text-6xl mb-8  text-white">
              Collect Your <br /> Kids Collection
            </h1>
            <button className="py-3 px-8 rounded-lg  bg-red-400 text-white font-bold transform hover:scale-90  hover:bg-red-500  ">
              SHOP NOW
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}
