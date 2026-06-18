"use client"
import React from 'react'
import { motion } from 'framer-motion';
import {CiPen} from "react-icons/ci"
import {IoFolderOpen} from "react-icons/io5"
import {RiComputerFill} from "react-icons/ri"
import {FiDownload} from "react-icons/fi"
import RedBG from "../../assets/redbg2.png";
import { slideUp } from '../Hero/Hero';

const bgStyle = {
    backgroundImage: `url(${RedBG.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

const ServicesData = [
    {
        id: 1,
        title: "Full Stack Web Development",
        icon: <CiPen className="text-3xl" />,
        link: "/services",
        desc: "Designing and building responsive web applications from frontend to backend. I create intuitive user interfaces with React and Next.js, coupled with robust server-side logic using Node.js, Python or Java — following clean architecture principles.",
        delay: 1.2,
    },
    {
        id: 2,
        title: "Backend Development & APIs",
        icon: <IoFolderOpen className="text-3xl" />,
        link: "/services",
        desc: "Building scalable and secure REST APIs and backend services. I design efficient data models, handle authentication, and implement business logic that powers reliable applications — using Python, Java, Node.js and SQL/NoSQL databases.",
        delay: 1.4,
    },
    {
        id: 3,
        title: "Software Architecture & Design",
        icon: <RiComputerFill className="text-3xl" />,
        link: "/services",
        desc: "Designing software systems with maintainability and scalability in mind. I apply software design patterns, SOLID principles and clean code practices to build architectures that are easy to evolve, test and deploy — including containerization with Docker.",
        delay: 1.6,
    },
    {
        id: 4,
        title: "Database Management & Optimization",
        icon: <RiComputerFill className="text-3xl" />,
        link: "/services",
        desc: "Designing, optimizing and managing relational and non-relational databases. From data modeling and query optimization to migrations and integrity constraints — ensuring data is structured, reliable and ready to power any application.",
        delay: 1.8,
    }
]

const reveal = (delay) =>{
    return {
      initial: {
        opacity :0,
      },
      animate : {
        opacity :1,
        transition : {
          duration : 0.4,
          delay : delay,
        },
      },
    };
  };

const Services = () => {
  return (
    <section id="services" style={bgStyle}>
        <div className='bg-gradient-to-b from-black to-primary/5 text-white '>
            <div className='container py-40'>
              <div className=' grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                {/* Services Info  */}
                <div className='flex flex-col justify-center'>
                    <div className='text-left space-y-7 lg:max-w-[400px]'>
                        <motion.h1 variants={slideUp(0.3)} initial="initial" animate="animate" className='text-3xl lg:text-4xl font-bold'>What I Do</motion.h1>
                        <motion.p variants={slideUp(0.5)} initial="initial" animate="animate" className='text-white/70 text-xl'>
                          I build software that works — from clean REST APIs and backend systems to full stack web applications.
                          My focus is on writing quality code, applying solid engineering principles, and delivering solutions that scale and last.
                        </motion.p>
                        <div className='flex items-center gap-4'>
                            <motion.button variants={slideUp(0.7)} initial="initial" animate="animate" className=' text-primary rounded font-bold px-5  !bg-white text-xs py-3 md:text-base hover:red-shadow'>View Projects</motion.button>
                           
                            <a href="./cv_hugues.pdf">
                            <motion.button variants={slideUp(0.9)} initial="initial" animate="animate" className='border border-white/50 rounded-lg px-4  text-xs md:text-base flex items-center gap-2 py-3  '>
                                <FiDownload/>
                                Download Resume
                            </motion.button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Services card  */}
                <div className='flex justify-center items-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                       {
                       ServicesData.map((service) => {
                        return (
                            <motion.div 
                                variants={reveal(service.delay)}
                                key={service.id}
                                initial="initial"
                                whileInView={"animate"}
                                className='flex flex-col gap-4 justify-center items-start p-6 bg-white/20 backdrop-blur-sm rounded-2xl'>
                                <div className='text-primary/80 bg-white/70 rounded-full p-2'>
                                    {service.icon}
                                </div>
                                <h1 className='text-2xl font-bold'>{service.title}</h1>
                                <p className='text-sm text-white/70'>{service.desc}</p>
                            </motion.div>
                        );
                    })
                       }
                    </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Services
