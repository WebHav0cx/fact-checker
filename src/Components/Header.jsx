import React from "react";

function Header() {
  return (
    <div className="background-image h-screen w-screen overflow-hidden bg-cover bg-no-repeat">
      <div className="flex justify-around items-center text-white gap-4x py-4">
        <h1 className="text-2xl font-bold">FactChecker</h1>
        <ul className="flex justify-around gap-4 style items-center list-none ">
          <li className="hover:underline cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="hover:underline cursor-pointer">
            <a href="/">About</a>
          </li>
          <li className="hover:underline cursor-pointer">
            <a href="/">Contact Us</a>
          </li>
          <li className="hover:underline cursor-pointer">
            <a href="/">Fact Checking</a>
          </li>
          <li className="hover:underline cursor-pointer">
            <a href="/">News</a>
          </li>
          <li className="hover:underline cursor-pointer">
            <a href="/">Reports</a>
          </li>
          <li className="hover:underline cursor-pointer">
            <a href="/">Verdicts</a>
          </li>
        </ul>
        <div className="flex gap-8">
          <a
            className="border border-solid border-gray-100 rounded-md px-[16px] py-[5px] hover:text-black hover:bg-slate-100"
            href="/"
          >
            Sign Up
          </a>
          <a
            className="border border-solid border-gray-100 rounded-md px-[16px] py-[5px] hover:text-black hover:bg-slate-100"
            href="/"
          >
            Sign In
          </a>
        </div>
      </div>
      <div className="flex justify-start gap-2 text-left items-center px-20 py-64">
        <div className="text-left text-white">
          <h1 className="text-6xl font-bold mb-4">Fact Checker</h1>
          <p className="text-xl">
            Welcome to our fact checking website dedicated to combating
            misinformation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
