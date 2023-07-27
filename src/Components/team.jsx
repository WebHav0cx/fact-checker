import React from "react";
import fact from "../assets/fact.png";
import journal from "../assets/journalist.jpg";
import research from "../assets/researcher.png";
import edit from "../assets/editor.jpg";

const factChecker = fact;
const journalist = journal;
const researcher = research;
const editor = edit;

const people = [
  {
    name: "Fact Checker",
    imageUrl: factChecker,
    role: "Passionate about the truth, out fact checkers are meticulous and detail-oriented.",
  },
  {
    name: "Investigative Journalist",
    role: "Our journalist use their expertise to dig deep and uncover the facts",
    imageUrl: journalist,
  },
  {
    name: "Researcher",
    role: "Committed to accuracy, our researchers collect and analyze data to corroborate the information.",
    imageUrl: researcher,
  },
  {
    name: "Editor",
    role: "Our editors ensure that our content is clear, concise, and error-free.",
    imageUrl: editor,
  },
];

function Team() {
  return (
    <div className="bg-[#fef5e7] py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto items-center justify-center flex flex-col flex-wrap max-w-7xl gap-x-8 gap-y-20 lg:px-8 ">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold tracking-tight text-lime-900 sm:text-4xl">
            Meet Our Team
          </h2>
        </div>
        <ul
          role="list"
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li className="list-none" key={person.name}>
              <div className="flex flex-col items-center justify-start gap-x-8 max-w-xs">
                <img
                  className="h-40 w-full rounded-lg mb-4 max-w-full"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold leading-7 tracking-tight text-lg text-lime-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-[#3a3630]">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Team;
