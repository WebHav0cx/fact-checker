import React from "react";

function Contact() {
  return (
    <div className="bg-[#fef5e7]">
      <section className="flex flex-col gap-14 py-14 overflow-hidden">
        <h2 className="text-5xl font-bold text-lime-900 text-center">
          Contact Us
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="flex flex-col gap-4 h-60 max-w-md bg-[#f6e9d5] px-4 py-8 justify-center items-start rounded-md">
            <h3 className="text-3xl font-semibold text-lime-900">
              Report Misinformation
            </h3>
            <p className="text-lg">
              If you've seen something that you think is wrong, let us know. Use
              the form or email us.
            </p>
            <a className="underline text-2xl text-lime-900" href="/">
              Report Misinformation
            </a>
          </div>
          <div className="flex flex-col gap-4 h-60 max-w-md bg-[#f6e9d5] px-4 py-8 justify-center items-start rounded-md">
            <h3 className="text-3xl font-semibold text-lime-900 ">
              General Inquiries
            </h3>
            <p className="text-lg">
              For any to other inquiries or suggestions, please email us.
            </p>
            <a className="underline text-2xl text-lime-900" href="/">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
