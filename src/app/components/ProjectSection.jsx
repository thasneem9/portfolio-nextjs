"use client"
import React,{useState, useRef} from 'react'
import { ProjectCard } from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";
const projectsData = [
    {
      id: 1,
      title: "InstaWave Full stack Social Media ",
      description: "Project 1 description",
      image: "./images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/thasneem9/InstaWave---Copy",
      previewUrl: "https://www.youtube.com/watch?v=HR9lszepjRQ",
    },
    {
      id: 2,
      title: "View Point Homes Frontend Website",
      description: "Project 2 description",
      image:"./images/projects/22.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://thasneem9.github.io/viewPointTouristHome/",
      previewUrl: "https://thasneem9.github.io/viewPointTouristHome/",
    },
    {
      id: 3,
      title: "Different Birds and their Sounds",
      description: "Project 3 description",
      image: "./images/projects/333.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/thasneem9/birdSounds",
      previewUrl: "https://thasneem9.github.io/birdSounds/",
    },
    {
      id: 4,
      title: "React Todo List application",
      description: "Project 4 description",
      image: "./images/projects/444.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/thasneem9/todoapp",
      previewUrl: "https://thasneem9.github.io/todoapp/",
    },
    {
      id: 5,
      title: "Currency Converter App",
      description: "Project 5 description",
      image: "./images/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/thasneem9/ex231currency",
      previewUrl: "https://github.com/thasneem9/ex231currency/blob/main/README.md",
    },
    {
      id: 6,
      title: "Mini Projects using HTML CSS BOOTSRAP",
      description: "Project 6 description",
      image: "./images/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/thasneem9/PORTFOLIO",
      previewUrl: "https://thasneem9.github.io/PORTFOLIO",
    },
  ];

export const ProjectSection = () => {
    const [tag,setTag]=useState("All");
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
    const handleTagChange=(newTag)=>{
        setTag(newTag)
    }
    const filteredProjects=projectsData.filter((project)=>{
        return project.tag.includes(tag)
    })
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };
  
  return (
    <section id="project">
    <h2  className='text-center text-4xl font-bold text-white mb-4'>My Projects</h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
        <ProjectTag onClick={handleTagChange} name="All"  isSelected={tag==="All"}/>
        <ProjectTag onClick={handleTagChange} name="Web"  isSelected={tag==="Web"}/>

    </div>
  
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
