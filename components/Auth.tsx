import firebase from "firebase";
import React, { FormEvent, useState } from "react";
import Link from "next/link";

export default function Auth() {
  const [registration, setRegistration] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (firebaseUser) {
        console.log("LOGGEDIN, CHECK COOKIES");
        window.location.href = "/";
      })
      .catch(function (error) {
        console.log(email, password);
        console.log("signIN error", error);
      });

    setEmail("");
    setPassword("");
    setUsername("");
  };
  const handleRegisterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (firebaseUser) {
        console.log("REGISTERED, CHECK COOKIES");
        window.location.href = "/";
      })
      .catch(function (error) {
        console.log("login error", error);
      });
  };

  return (
    <section className="grid-container">
      <main className="col-start-2 col-end-3 grid place-content-center h-screen ">
        <Link href="/">
          <h1 className="text-3xl font-bold uppercase text-black ">
            Steve
            <span className="align-top">
              <box-icon name="meteor" size="md" color=""></box-icon>
            </span>
          </h1>
        </Link>

        <form
          className=" shadow-lg my-8 rounded-lg p-8 md:p-20 grid border"
          onSubmit={registration ? handleRegisterSubmit : handleLoginSubmit}
        >
          <h1 className=" text-2xl md:text-3xl mb-8  font-bold ">
            {!registration ? "Sign in to" : "Register"} your account
          </h1>
          {registration && (
            <div className="text-sm">
              <label htmlFor="username" className="block">
                Username
              </label>
              <input
                type="text"
                className="w-full md:w-96 text-lg p-2 my-4 border rounded-md"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          <div className="text-sm">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              className="w-full md:w-96 text-lg p-2 my-4 border rounded-md"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="text-sm">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              className="w-full md:w-96 text-lg p-2 my-4 border rounded-md"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-sm">
            <input
              type="checkbox"
              name="settoken"
              id="settoken"
              defaultChecked={true}
            />{" "}
            Stay signed in for a week
          </div>
          <button
            type="submit"
            className="py-3 px-8 bg-indigo-600 transform hover:scale-95 text-white mt-10 rounded-md text-lg"
          >
            Continue
          </button>
        </form>
        <p className="md:text-base text-sm">
          Don't have an account?
          <span
            className="text-purple-600 cursor-pointer hover:underline "
            onClick={() => setRegistration((prev) => !prev)}
          >
            {" "}
            Sign up
          </span>
        </p>
      </main>
    </section>
  );
}
