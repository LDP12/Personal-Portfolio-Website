/**
 * @copyright 2024 Luke Penney
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Full Stack Music App',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://example.com/'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Free Stock Photo App',
    tags: ['API', 'SPA'],
    projectLink: 'https://example.com/'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'Recipe App',
    tags: ['Development', 'API'],
    projectLink: 'https://example.com/'
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Real Estate Website',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://example.com/'
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'eCommerce Website',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://example.com/'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'vCard Personal Portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://example.com/'
  },
];

const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

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
  )
}

export default Work