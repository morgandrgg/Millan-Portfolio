"use client";
import { useState } from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const feedbacks = [
  {
    text: "This company provided excellent service and support. Highly recommended!",
    name: "John Doe",
    image: "/path/to/client1.jpg",
  },
  {
    text: "Great experience! The team was professional and efficient.",
    name: "Jane Smith",
    image: "/path/to/client2.jpg",
  },
  {
    text: "Outstanding customer service and quality work. I will definitely come back.",
    name: "Michael Brown",
    image: "/path/to/client3.jpg",
  },
];

const AboutDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>

          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey as a multidisciplinary designer is powered by an array of
            mystical design tools, with Adobe Photoshop casting the core of my
            enchantments. I wield tools like Adobe Illustrator and Adobe XD with
            precision, crafting seamless visual experiences that transcend
            conventional boundaries. Embracing the ancient arts of digital
            design, I empower creations with creativity, innovation, and
            meticulous attention to detail. Beyond design, my technical skills
            ensure that every creation not only meets but exceeds expectations.
            Each project is an opportunity to blend artistic vision with
            technological expertise, shaping digital landscapes that inspire and
            captivate. Join me as I continue to explore new tools and
            techniques, weaving innovation into the fabric of every visual
            endeavor.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full flex flex-col items-center space-y-4">
          <h2 className="font-bold bg-opacity-5  text-4xl xs:text-4xl sm:text-6xl  lg:text-4xl text-accent">
            Tools of work
          </h2>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=ai,ps,xd,figma,blender,html,css,bootstrap`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className="col-span-full flex flex-col items-center space-y-4">
          <h2 className="font-bold bg-opacity-5  text-4xl xs:text-4xl sm:text-6xl  lg:text-4xl text-accent">
            Clients feedback
          </h2>
          <div
            id="default-carousel"
            className="relative w-full"
            data-carousel="slide"
          >
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              {feedbacks.map((feedback, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-700 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                  data-carousel-item
                >
                  <div className="relative mx-16 justify-center space-y-12 mb-6 flex flex-col items-center md:items-start p-4 md:space-y-4 md:space-x-4">
                    <div className="flex mx-auto items-center  space-x-12">
                      <img
                        src={feedback.image}
                        alt={`${feedback.name}'s photo`}
                        className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover"
                      />
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ml-2 md:ml-4">
                        {feedback.name}
                      </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:items-center">
                      <p className="text-center mb-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                        {feedback.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              {feedbacks.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-accent" : "bg-white"
                  }`}
                  aria-current={index === currentIndex}
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            {/* Slider controls */}
            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
              onClick={handlePrev}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
              onClick={handleNext}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
