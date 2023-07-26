import React from "react";

function Commit() {
  return (
    <div className="bg-[#fef5e7]">
      <section className=" justify-center items-center flex flex-col flex-wrap gap-8 mx-4 my-auto pb-20 overflow-hidden">
        <h2 className="text-5xl font-bold text-lime-900">
          Our Commitment to Accuracy
        </h2>
        <div className="flex justify-center items-center flex-wrap gap-8 pt-4 ">
          <div className="flex flex-col gap-4 h-60 max-w-xs bg-[#f6e9d5] px-4 py-8 justify-center items-center rounded-md">
            <h2 className="text-3xl font-semibold text-lime-900">
              Zero Tolerance for Misinformation
            </h2>
            <p>
              We are dedicated to correcting and clarifying false claims and
              information.
            </p>
          </div>
          <div className="flex flex-col gap-4 h-60 max-w-xs bg-[#f6e9d5] px-4 py-8 justify-center items-center rounded-md">
            <h2 className="text-3xl font-semibold text-lime-900">
              No Political or Commercial Bias
            </h2>
            <p>
              We do not have any political affiliations or commercial interests
              in our fact-checking process.
            </p>
          </div>
          <div className="flex flex-col gap-4 h-60 max-w-xs bg-[#f6e9d5] px-4 py-8 justify-center items-center rounded-md">
            <h2 className="text-3xl font-semibold text-lime-900">
              Peer-Reviewed by Experts
            </h2>
            <p>
              We have a peer-review process to ensure accuracy and objectivity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Commit;
