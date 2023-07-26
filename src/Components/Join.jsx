import React from "react";

function Join() {
  return (
    <div className="bg-[#fef5e7]">
      <section className="flex flex-col gap-8 m-auto pb-20 overflow-hidden">
        <h2 className="text-5xl font-bold text-lime-900 text-center">
          Join Us in Fighting Misinformation
        </h2>
        <div className="flex flex-wrap justify-around items-center">
          <div className="flex flex-col gap-6 p-4">
            <h3 className="text-3xl font-semibold text-lime-900">
              Spread the Word
            </h3>
            <p>Share our website and articles on social media. </p>
            <ul>
              <li className="hover:underline cursor-pointer">
                <a href="/">Facebook</a>
              </li>
              <li className="hover:underline cursor-pointer">
                <a href="/">Instagram</a>
              </li>
              <li className="hover:underline cursor-pointer">
                <a href="/">Twitter</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-3xl font-semibold text-lime-900">
              Become a Supporter
            </h3>
            <p>Help us continue our work by becoming a monthly supporter</p>
            <button className="bg-lime-900 text-gray-100 px-2 py-4 rounded-lg w-40 hover:bg-lime-950">
              Become a Supporter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Join;
