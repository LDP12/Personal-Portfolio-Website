/**
 * @copyright 2024 Luke Penney
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * Register gsap plugins
 * (Note: typically you wouldn't register `useGSAP` as a plugin,
 * but I'm leaving it as you had it.)
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import ReviewCard from "./ReviewCard";

// 1) Import each image from src/assets/images
import people1 from "../assets/images/people-1.jpg";
import people2 from "../assets/images/people-2.jpg";
import people3 from "../assets/images/people-3.jpg";
import people4 from "../assets/images/people-4.jpg";
import people5 from "../assets/images/people-5.jpg";
import people6 from "../assets/images/people-6.jpg";

const reviews = [
  {
    content: "Exceptional web development! Delivered a seamless, responsive site...",
    name: "Sophia Ramirez",
    imgSrc: people1,
    company: "PixelForge"
  },
  {
    content: "Impressive work! Fast loading times, intuitive design...",
    name: "Ethan Caldwell",
    imgSrc: people2,
    company: "NexaWave"
  },
  {
    content: "Outstanding developer! Built a robust site with perfect functionality...",
    name: "Liam Bennett",
    imgSrc: people3,
    company: "CodeCraft"
  },
  {
    content: "Creative and skilled! Produced a modern, user-friendly site...",
    name: "Noah Williams",
    imgSrc: people4,
    company: "BrightWeb"
  },
  {
    content: "Professional work! Delivered on time, with a polished design...",
    name: "Ava Thompson",
    imgSrc: people5,
    company: "TechMosaic"
  },
  {
    content: "Excellent project execution! High-quality code, responsive design...",
    name: "Jonathan",
    imgSrc: people6,
    company: "Skyline Digital"
  }
];

const Review = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "-200% 80%",
        end: "400% 80%",
        scrub: true
      },
      x: "-1000"
    });
  });

  return (
      <section id="reviews" className="section overflow-hidden">
        <div className="container">
          <h2 className="headline-2 mb-8 reveal-up">What my customers say</h2>

          <div className="scrub-slide flex items-stretch gap-3 w-fit">
            {reviews.map(({ content, name, imgSrc, company }, key) => (
                <ReviewCard
                    key={key}
                    name={name}
                    imgSrc={imgSrc}
                    company={company}
                    content={content}
                />
            ))}
          </div>
        </div>
      </section>
  );
};

export default Review;