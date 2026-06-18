"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Project1 from "../../assets/ventteleph.jpg";
import Project2 from "../../assets/data.jpg";
import Project3 from "../../assets/data2.jpg";
import Project4 from "../../assets/data3.png";
import Project5 from "../../assets/todolist.png";
import Project6 from "../../assets/dat.png";
import Project7 from "../../assets/caurispay.png";

import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProjetsData = [
    {
        id: 1,
        title: "Techstore — E-Commerce Web App",
        desc: "A modern, responsive e-commerce web application built for selling tech products (AirPods). Features include product browsing, cart management, secure online payment, order tracking and customer account management. Built with a clean UI/UX focus and optimized for performance.",
        delay: 1.2,
        img: Project1,
        lien1: "https://vente-airpods.web.app/",
        lien2: "https://github.com/MEDEGNON199"
    },
    {
        id: 2,
        title: "Heart Disease — Data Analysis App",
        desc: "A data analysis project focused on a medical dataset for cardiac diseases. Includes data cleaning, preprocessing, exploratory analysis and visualization of key clinical features. Demonstrates skills in Python, Pandas and data-driven problem solving.",
        delay: 1.6,
        img: Project2,
        lien1: "https://github.com/MEDEGNON199/Analysecardiaque.git",
        lien2: "https://github.com/MEDEGNON199/Analysecardiaque.git"
    },
    {
        id: 3,
        title: "Financial Dashboard — Power BI",
        desc: "An interactive business intelligence dashboard presenting executive-level financial KPIs — monthly profit trends, top geographic markets, product performance and revenue by segment. Designed to support data-driven business decisions.",
        delay: 2,
        img: Project3,
        lien1: "https://github.com/MEDEGNON199/Rapport-financier.git",
        lien2: "https://github.com/MEDEGNON199/Rapport-financier.git"
    },
    {
        id: 4,
        title: "Customer Dashboard — Business Intelligence",
        desc: "A business analytics dashboard providing insights on customer segmentation, purchase behavior and revenue drivers. Highlights top-performing product categories and regional market trends (APAC). Built with Power BI for strategic commercial decision-making.",
        delay: 2,
        img: Project4,
        lien1: "https://register-seven-delta.vercel.app/",
        lien2: "https://github.com/hippolite-oss"
    },
    {
        id: 5,
        title: "Todo List — Vanilla JS App",
        desc: "A clean, fully responsive task management application built with HTML, CSS and JavaScript. Supports adding, completing and deleting tasks with a smooth user experience. A solid demonstration of DOM manipulation, event handling and front-end fundamentals.",
        delay: 2,
        img: Project5,
        lien1: "https://todolist-indol-one-31.vercel.app/",
        lien2: "https://github.com/hippolite-oss"
    },
    {
        id: 6,
        title: "UATM-GASA — University Web Platform",
        desc: "A dynamic and modern website for the UATM-GASA university, designed to give students, faculty, researchers and partners easy access to key institutional information. Built with a focus on usability, accessibility and clean design.",
        delay: 2,
        img: Project6,
        lien1: "https://gasasite.vercel.app/index.html",
        lien2: "https://github.com/hippolite-oss"
    },
    {
        id: 7,
        title: "CaurisPay — Fintech Web Platform",
        desc: "A modern fintech platform centralizing payment services, money transfers and bill payments. Features an e-wallet, secure transaction tracking and a fully responsive interface. Built with a focus on UX, security and reliable financial workflows.",
        delay: 2,
        img: Project7,
        lien1: "https://cauris-pay-sooty.vercel.app/",
        lien2: "https://github.com/hippolite-oss"
    },
]

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

const Projects = () => {
    return (
        <section className='bg-black text-white'>
            <div className="container py-20 xl:py-36 space-y-36">
                {/* Titre */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.6, delay: 0.5 }} 
                    className='relative text-center'>
                    <p className='text-3xl lg:text-4xl tracking-widest font-bold uppercase z-20'>Projects</p>
                    <p className='text-5xl lg:text-8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-extrabold'>Projects</p>
                </motion.div>

                {/* Section slider */}
                <Slider {...sliderSettings}>
                    {ProjetsData.map((project) => (
                        <motion.div 
                            key={project.id} 
                            whileHover={{ scale: 1.05 }}
                            className="p-6 group"
                        >
                            <div className="bg-black hover:red-shadow border-2 border-primary/80 p-4 rounded-xl space-y-5 transition-all duration-300 transform">
                                <Image className='w-full object-cover rounded' src={project.img} alt={project.title} />
                                <div className='space-y-2 p-4'>
                                    <h1 className="text-lg font-bold">{project.title}</h1>
                                    <p className='text-sm line-clamp-5'>{project.desc}</p>
                                </div>
                                <div className='hidden group-hover:flex justify-around items-center duration-300'>
                                    <Link href={project.lien1} target="_blank">
                                        <button className='border-2 border-white py-2 rounded-lg px-4'>Live</button>
                                    </Link>
                                    <Link href={project.lien2} target="_blank">
                                        <button className='btn'>View Code</button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Projects;
