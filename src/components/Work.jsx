/**
 * @copyright 2024 Luke Penney
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

// Import each project image
import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";

const works = [
  {
    imgSrc: project1,
    title: "Full Stack Music App",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://example.com/"
  },
  {
    imgSrc: project2,
    title: "Free Stock Photo App",
    tags: ["API", "SPA"],
    projectLink: "https://example.com/"
  },
  {
    imgSrc: project3,
    title: "Real Estate Website",
    tags: ["Web-design", "Development"],
    projectLink: "https://example.com/"
  },
  {
    imgSrc: project4,
    title: "eCommerce Website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://example.com/"
  },
];

const Work = () => {
  return (
      <section id="work" className="section">
        <div className="container">
          <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

          <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                <ProjectCard
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    classes="reveal-up"
                />
            ))}
          </div>
        </div>
      </section>
  );
};

export default Work;