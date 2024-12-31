/**
 * @copyright 2024 Luke Penney
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ReviewCard from "./ReviewCard";

import people1 from "../assets/images/people-1.jpg";
import people2 from "../assets/images/people-2.jpg";
import people3 from "../assets/images/people-3.jpg";
import people4 from "../assets/images/people-4.jpg";
import people5 from "../assets/images/people-5.jpg";
import people6 from "../assets/images/people-6.jpg";

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const reviews = [
  {
    content: "Friendly & exceptional developer. Delivered a seamless, responsive & smooth result.",
    name: "Sophia Ramirez",
    imgSrc: people1,
    company: "PixelForge",
  },
  {
    content: "Impressive work, will use always. Fast loading times, intuitive design.",
    name: "Ethan Caldwell",
    imgSrc: people2,
    company: "NexaWave",
  },
  {
    content: "Outstanding developer! Built a robust site with perfect functionality.",
    name: "Liam Bennett",
    imgSrc: people3,
    company: "CodeCraft",
  },
  {
    content: "Creative and skilled. Produced a modern, user-friendly site.",
    name: "Noah Williams",
    imgSrc: people4,
    company: "BrightWeb",
  },
  {
    content: "Professional work. Delivered on time, with a polished design.",
    name: "Ava Thompson",
    imgSrc: people5,
    company: "TechMosaic",
  },
  {
    content: "Excellent project execution! High-quality code, responsive design.",
    name: "Jonathan",
    imgSrc: people6,
    company: "Skyline Digital",
  },
];

const Review = () => {
  const reviewContainerRef = useRef(null);

  useGSAP(() => {
    gsap.to(".scrub-slide-parent", {
      scrollTrigger: {
        trigger: ".scrub-slide-parent",
        start: "-200% 80%",
        end: "400% 80%",
        scrub: true,
      },
      x: -1000,
    });
  });

  const scrollLeft = (event) => {
    event.preventDefault();
    if (reviewContainerRef.current) {
      reviewContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    } else {
      console.error("reviewContainerRef is null");
    }
  };

  const scrollRight = (event) => {
    event.preventDefault();
    reviewContainerRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
      <section id="reviews" className="section overflow-hidden relative">
        <div className="container">
          <h2 className="headline-2 mb-8 reveal-up">What my customers say</h2>

          <div className="relative">
            <div className="scrub-slide-parent">
              <div
                  ref={reviewContainerRef}
                  className="scrub-slide flex items-stretch gap-3 w-fit overflow-x-scroll scrollbar-hide"
              >
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

            {/* Left Arrow */}
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800
                       text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700"
            >
              ‹
            </button>

            {/* Right Arrow */}
            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800
                       text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700"
            >
              ›
            </button>
          </div>
        </div>
      </section>
  );
};

export default Review;
