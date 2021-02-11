import React from "react";
import Image from "next/image";
import {
  useGetCartListQuery,
  useRemoveFromCartMutation,
} from "generated/graphql";
import { uid } from "lib/auth";

export default function Cart() {
  const { data } = useGetCartListQuery();
  const [removeFromCart] = useRemoveFromCartMutation();
  const numberOfItems = data?.getCartList?.length;
  let total: number = 0;
  data?.getCartList?.map(({ price }) => (total += parseInt(price!)));
  return (
    <section className="grid-container py-20 h-90vh  ">
      <main className="col-start-2 col-end-3 ">
        <div className="grid grid-cols-4 justify-between p-2 text-white bg-red-400 ">
          <h1 className="col-span-2">Product</h1>
          <h1 className="text-right">Quantity</h1>
          <h1 className="text-right">Subtotal</h1>
        </div>
        <div className="">
          {data?.getCartList?.map(({ name, price, url, id }) => (
            <div className="grid grid-cols-4 items-center py-2" key={id}>
              <div className="flex items-center col-span-2 ">
                <div className="mr-4 sm:block hidden">
                  <Image src={url} width={100} height={100} alt={name} />
                </div>
                <div className="">
                  <h1>{name}</h1>
                  <p>Price: ${price}</p>
                  <button
                    className="text-red-400 hover:underline "
                    onClick={async () => {
                      await removeFromCart({
                        variables: {
                          id,
                          user_id: uid,
                        },
                        update: (cache) => {
                          cache.evict({ id: `CartList:${id}` });
                        },
                      });
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="text-right">1</div>
              <div className="text-right">$50.00</div>
            </div>
          ))}
        </div>
        <div className="border-t-2 border-red-400 pt-10 mt-10 pb-20">
          <div className=" max-w-sm ">
            <div className="flex mb-4 justify-between">
              <h1>
                {`Subtotal ${
                  numberOfItems ? numberOfItems + " items" : "0 item"
                }  `}
              </h1>
              <p>${total}</p>
            </div>
            <div className="flex mb-4 justify-between">
              <h1>Tax</h1>
              <p>${total * 0.12}</p>
            </div>
            <div className="flex mb-4 justify-between">
              <h1>Total </h1>
              <p>${total + total * 0.12}</p>
            </div>
            <button className="py-3 px-8 text-white font-bold rounded-lg mt-4 transform hover:scale-95 hover:bg-red-500 bg-red-400">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}
