import React from "react";

function Verify() {
  return (
    <div>
      <section className="flex flex-col justify-center items-center gap-8 py-8 bg-[#fef5e7] text-lime-900 overflow-hidden">
        <h1 className="text-5xl font-bold text-lime-900">
          How We Verify Information
        </h1>
        <div className="flex flex-row justify-around items-center flex-wrap gap-36">
          <div className="flex flex-col items-start justify-center gap-4 max-width text-[#3a3630]">
            <h2 className="text-3xl font-semibold text-lime-900">
              Multiple Sources
            </h2>
            <h5>
              We cross-check every piece of information with reliable sources.
            </h5>
            <ul>
              <li>National and international newspapers</li>
              <li>Government agencies</li>
              <li>Scientific journals</li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 max-width text-[#3a3630]">
            <h2 className="text-3xl font-semibold text-lime-900">
              Expert Analysis
            </h2>
            <h5>Our team of experts analyzes the claims and data.</h5>
            <ul>
              <li>Fact-checkers </li>
              <li>Academics</li>
              <li>Specialists on relevant topics</li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 max-width text-[#3a3630]">
            <h2 className="text-3xl font-semibold text-lime-900">
              Transparency
            </h2>
            <h5>We provide a clear explanation of our process and sources.</h5>
            <ul>
              <li>Methodology References </li>
              <li>Government agencies</li>
              <li>Data and statistics</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Verify;
