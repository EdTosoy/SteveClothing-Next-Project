import React from "react";
import Image from "next/image";

export default function Cart() {
  return (
    <section className="grid-container py-20 h-90vh ">
      <main className="col-start-2 col-end-3 ">
        <div className="grid grid-cols-3 justify-between p-2 text-white bg-red-400 ">
          <h1>Product</h1>
          <h1 className="text-right">Quantity</h1>
          <h1 className="text-right">Subtotal</h1>
        </div>
        <div className="grid grid-cols-3 items-center py-2">
          <div className="flex items-center ">
            <div className="mr-4">
              <Image src="/images/pic1.jpg" width={100} height={100} />
            </div>
            <div className="">
              <h1>Boy’s T-Shirt</h1>
              <p>Price: $50.00</p>
              <button className="text-red-400 hover:underline ">Remove</button>
            </div>
          </div>
          <div className="text-right">1</div>
          <div className="text-right">$50.00</div>
        </div>
        <div className="border-t-2 border-red-400 pt-10 mt-10">
          <div className=" max-w-sm ">
            <div className="flex mb-4 justify-between">
              <h1>Subtotal</h1>
              <p>$200</p>
            </div>
            <div className="flex mb-4 justify-between">
              <h1>Tax</h1>
              <p>$200</p>
            </div>
            <div className="flex mb-4 justify-between">
              <h1>Total </h1>
              <p>$200</p>
            </div>
            <button className="py-3 px-8 text-white font-bold rounded-lg mt-4 transform hover:scale-95 hover:bg-red-500 bg-red-400" >PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </main>
    </section>
  );
}
