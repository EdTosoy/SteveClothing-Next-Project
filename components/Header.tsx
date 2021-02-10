import React from "react";
import Link from "next/link";

export default function Header() {
  const navs = [
    {
      name: "Home",
      pathname: "/",
    },
    {
      name: "Products",
      pathname: "/poducts",
    },
    {
      name: "About",
      pathname: "#About",
    },
    {
      name: "Contact",
      pathname: "#Contact",
    },

    {
      name: "Account",
      pathname: "/auth",
    },
  ];
  return (
    <header className="grid-container sticky top-0  z-50   py-5 bg-blue-100 ">
      <main className="col-start-2 col-end-3 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl" >Codevo</h1>
        </Link>
        <div className="flex items-center ">
          {navs.map(({ name, pathname }) => (
            <nav key={name} className="mr-5">
              <Link href={pathname}>{name}</Link>
            </nav>
          ))}
          <div className="grid place-content-center cursor-pointer hover:bg-blue-200  p-2 rounded-full">
            <Link href="/cart">
              <box-icon name="shopping-bag" color="#253b70"></box-icon>
            </Link>
          </div>
        </div>
      </main>
    </header>
  );
}
