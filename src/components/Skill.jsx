/**
 * @copyright 2024 Luke Penney
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";

import figma from "../assets/images/figma.svg";
import css3 from "../assets/images/css3.svg";
import javascript from "../assets/images/javascript.svg";
import dotnet from "../assets/images/dotnet.svg";
import reactLogo from "../assets/images/react.svg";
import tailwindcss from "../assets/images/tailwindcss.svg";
import csharp from "../assets/images/csharp.svg";
import mysql from "../assets/images/mysql.svg";
import rider from "../assets/images/rider.svg";

const skillItem = [
  {
    imgSrc: rider,
    label: "Jetbrains Rider",
    desc: "IDE"
  },
  {
    imgSrc: figma,
    label: "Figma",
    desc: "Design Tool"
  },
  {
    imgSrc: css3,
    label: "CSS",
    desc: "User Interface"
  },
  {
    imgSrc: javascript,
    label: "JavaScript",
    desc: "Interaction"
  },
  {
    imgSrc: reactLogo,
    label: "React",
    desc: "Framework"
  },
  {
    imgSrc: tailwindcss,
    label: "TailwindCSS",
    desc: "User Interface"
  },
  {
    imgSrc: csharp,
    label: "CSharp",
    desc: "Functionality"
  },
  {
    imgSrc: dotnet,
    label: ".NET Core",
    desc: "Framework"
  },
  {
    imgSrc: mysql,
    label: "MySQL",
    desc: "Database"
  }
];

const Skill = () => {
  return (
      <section className="section">
        <div className="container">
          <h2 className="headline-2 reveal-up">Essential Tools I use</h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
            Discover the powerful tools and technologies I use to create exceptional,
            high-performing websites &amp; applications.
          </p>

          <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
            {skillItem.map(({ imgSrc, label, desc }, key) => (
                <SkillCard
                    key={key}
                    imgSrc={imgSrc}
                    label={label}
                    desc={desc}
                    classes="reveal-up"
                />
            ))}
          </div>
        </div>
      </section>
  );
};

export default Skill;