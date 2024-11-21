"use client";

import { motion } from "framer-motion";
import react, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Front-End",
    Title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quas id nihil.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "https://ecommers-project.onrender.com/",
    github: "https://github.com/chiranjeet-mourya/ecommers_project",
  },
  {
    num: "02",
    category: "Full Stack",
    Title: "project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quas id nihil.",
    stack: [{ name: "React Js" }, { name: "Node Js" }, { name: "MongoDB" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "MERN Stack",
    Title: "project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quas id nihil.",
    stack: [{ name: "Next.js" }, { name: "Taiwind.css" }],
    image: "/assets/work/thumb3.png",
    live: "https://strapi-product-website.onrender.com",
    github: "https://github.com/chiranjeet-mourya/strapi-product-website",
  },
  {
    num: "04",
    category: "React Js",
    Title: "project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quas id nihil.",
    stack: [{ name: "React.js" }, { name: "Taiwind.css" }, { name: "Bootstrap" }],
    image: "/assets/work/thumb4.jpg",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition:{delay:2.4, duration:0.4, ease:"easeIn"}}}
      className="min-h-[70vh] flex flex-col justify-center py-4 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[25px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[40px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {project.category} Project
              </h2>
              {/* project description */}
              <p className="text-white/60 m-2">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last come */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/30"></div>
              {/* buttons */}
              <div className="flex items-center gap-6">
                {/* live project button*/}
                <Link href={project.live}>
                  <TooltipProvider DelayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group mt-1">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button*/}
                <Link href={project.github}>
                  <TooltipProvider DelayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group mt-1">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/* swiper slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidePreView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((pro, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[400px] relative group justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-10"></div>
                      {/* images */}
                      <div className="relative w-full h-full">
                        <Image
                          src={pro.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns containerStyles="flex gap-4 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-16 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[40px] h-[40px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
