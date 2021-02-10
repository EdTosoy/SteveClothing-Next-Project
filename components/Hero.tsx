import React from "react";

export default function Hero() {
  return (
    <section className="grid-container h-90vh bg-hero-bg bg-no-repeat bg-right-bottom bg-blue-100">
      <main className="col-start-2 col-end-3  ">
        <div className="max-w-md mt-40">
          <p className="text-3xl mb-4 text-yellow-500 ">
            70% <span className="text-purple-400">SALE OFF</span>
          </p>
          <h1 className="text-6xl mb-8 ">Summer Vibes mode on</h1>
          <button className="py-3 px-8 rounded-lg  bg-red-400 text-white font-bold transform hover:scale-90  hover:bg-red-500  ">
            SHOP NOW
          </button>
        </div>
      </main>
    </section>
  );
}
