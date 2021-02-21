import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import nookies from "nookies";
import { verifyIdToken } from "../firebaseAdmin";
import { GetServerSideProps } from "next";
import { AuthContext, uid } from "../lib/auth";
import firebase from "firebase";
import { MenuContext } from "ContextAPI/menuContext";

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

  const { user } = useContext(AuthContext);
  const { openMenu, setOpenMenu } = useContext(MenuContext);
  console.log(uid);
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
      {openMenu && (
        <div className="col-start-1 md:hidden  col-end-4">
          <div className="top-16 mt-2 border-t border-b shadow-3xl absolute w-full  text-center  p-6 bg-white ">
            {navs.map(({ name, pathname }) => (
              <Link href={pathname} key={name}>
                <nav
                  className="cursor-pointer navigation my-4 text-blue-900 "
                  onClick={() => {
                    setOpenMenu((prev) => !prev);
                  }}
                >
                  {name}
                </nav>
              </Link>
            ))}
          </div>
        </div>
      )}
      <main className="col-start-2 col-end-3 flex items-center justify-between">
        <Link href="/">
          <h1
            className={`
              ${
                scroll ? " text-white" : "text-black"
              } text-3xl font-bold uppercase cursor-pointer  `}
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

          <div
            className="grid place-content-center cursor-pointer hover:bg-blue-200  md:hidden   p-2 rounded-full"
            onClick={() => {
              setOpenMenu((prev) => !prev);
              console.log(openMenu);
            }}
          >
            <box-icon
              name="menu"
              color={scroll ? "white" : "#253b70"}
            ></box-icon>
          </div>
          <div className="grid place-content-center cursor-pointer hover:bg-blue-200 p-2 rounded-full">
            <Link href="/cart">
              <box-icon
                name="shopping-bag"
                color={scroll ? "white" : "#253b70"}
              ></box-icon>
            </Link>
          </div>

          {!user ? (
            <div className="grid place-content-center cursor-pointer hover:bg-blue-200  p-2 rounded-full">
              <Link href="/auth">
                <box-icon
                  name="user-circle"
                  color={scroll ? "white" : "#253b70"}
                ></box-icon>
              </Link>
            </div>
          ) : (
            <button
              className=" grid place-content-center cursor-pointer  p-2 rounded-full hover:bg-blue-200 "
              onClick={async () => {
                await firebase.auth().signOut();
                window.location.href = "/";
              }}
            >
              <box-icon name="exit" color="red"></box-icon>
            </button>
          )}
        </div>
      </main>
    </header>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { email } = token;
    return {
      props: { token },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
    return { props: {} };
  }
};
