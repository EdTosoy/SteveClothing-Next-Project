import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const navs = [
    {
      name: "Home",
      pathname: "/#",
    },
    {
      name: "Products",
      pathname: "/products",
    },
    {
      name: "About",
      pathname: "/#About",
    },
    {
      name: "Contact",
      pathname: "/#Contact",
    },
  ];
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);
  return (
    <header
      className={`${
        scroll ? "bg-blue-900 text-white shadow-xl  " : "bg-blue-100 "
      }  grid-container sticky top-0  z-50    py-5  `}
    >
      <main className="col-start-2 col-end-3 flex items-center justify-between">
        <Link href="/">
          <h1
            className={`
              ${
                scroll ? " text-white" : "text-black"
              } text-3xl font-bold uppercase   `}
          >
            Steve
            <span className="align-top">
              <box-icon
                name="meteor"
                size="md"
                color={scroll ? "white" : "black"}
              ></box-icon>
            </span>
          </h1>
        </Link>
        <div className="flex items-center ">
          {navs.map(({ name, pathname }) => (
            <nav key={name} className="mr-5 hidden md:block ">
              <Link href={pathname}>{name}</Link>
            </nav>
          ))}

          <div className="grid place-content-center cursor-pointer hover:bg-blue-200  p-2 rounded-full">
            <Link href="/auth">
              <box-icon
                name="user-circle"
                color={scroll ? "white" : "#253b70"}
              ></box-icon>
            </Link>
          </div>
          <div className="grid place-content-center cursor-pointer hover:bg-blue-200  p-2 rounded-full">
            <Link href="/cart">
              <box-icon
                name="shopping-bag"
                color={scroll ? "white" : "#253b70"}
              ></box-icon>
            </Link>
          </div>
        </div>
      </main>
    </header>
  );
}
