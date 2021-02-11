import React from "react";

export default function Footer() {
  const footerLink = [
    {
      title: "EXTRAS",
      sub1: "brands",
      sub2: "gift certificate",
      sub3: "affilate",
      sub4: "special",
      sub5: "site map",
    },
    {
      title: "INFORMATION",
      sub1: "about us",
      sub2: "privacy policy",
      sub3: "terms and Contditions",
      sub4: "contact us",
      sub5: "",
    },
    {
      title: "MY ACCOUNT",
      sub1: "my Account",
      sub2: "order history",
      sub3: "wish list",
      sub4: "newsletter",
      sub5: "returns",
    },
  ];
  return (
    <footer
      className="grid-container text-white bg-gray-900  py-20  "
      id="Contact"
    >
      <main className="col-start-2 col-end-3 grid grid-cols-2 text-sm md:grid-cols-4">
        {footerLink.map(({ title, sub1, sub2, sub3, sub4, sub5 }) => (
          <div className="" key={title}>
            <h1 className="text-xl mb-3">{title}</h1>
            <p className="hover:text-pink-500 mb-1 font-normal ">{sub1}</p>
            <p className="hover:text-pink-500 mb-1 font-normal ">{sub2}</p>
            <p className="hover:text-pink-500 mb-1 font-normal ">{sub3}</p>
            <p className="hover:text-pink-500 mb-1 font-normal ">{sub4}</p>
            <p className="hover:text-pink-500 mb-1 font-normal ">{sub5}</p>
          </div>
        ))}
        <div className="">
          <h1 className="text-xl mb-3">CONTACT US</h1>
          <p className="hover:text-pink-500 mb-1 font-normal ">
            42 Dream House, Dreammy street, 7131 Dreamville, USA
          </p>
          <p className="hover:text-pink-500 mb-1 font-normal ">
            company@gmail.com
          </p>
          <p className="hover:text-pink-500 mb-1 font-normal ">456-456-4512 </p>
          <p className="hover:text-pink-500 mb-1 font-normal ">
            Dream City, USA
          </p>
        </div>
      </main>
    </footer>
  );
}
