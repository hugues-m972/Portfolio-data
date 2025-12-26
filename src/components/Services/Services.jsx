"use client"
import React from 'react'
import { delay, motion } from 'framer-motion';
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
    title: "Développement Web    & Mobile",
    icon: <CiPen className="text-3xl" />,
    link: "/services",
    desc: "Je conçois des sites web et applications mobiles adaptés aux besoins des utilisateurs, en privilégiant un design clair et une expérience fluide, tout en continuant à apprendre et à améliorer mes compétences.",
    delay: 1.2,
    },
    {
       id: 2,
title: "Data Engineering & Business Support",
icon: <IoFolderOpen className="text-3xl" />,
link: "/services",
desc: "Collecte, transformation et structuration des données pour les rendre fiables et facilement exploitables. Mise en place de pipelines et d’automatisations permettant aux équipes business et analystes de créer des tableaux de bord et de prendre des décisions éclairées rapidement.",
delay: 1.4,

    },
    {
    id: 3,
title: "Data Engineering & Pipelines",
icon: <RiComputerFill className="text-3xl" />,
link: "/services",
desc: "Conception et optimisation de pipelines de données robustes et fiables. Transformation, nettoyage et structuration des données pour les rendre exploitables par les équipes business et les analystes. Mise en place de solutions data-driven permettant aux entreprises de prendre des décisions rapides et éclairées.",
delay: 1.6,

    },
    {
        id: 4,
    title: "Data Cleaning & Preprocessing",
    icon: <RiComputerFill className="text-3xl" />,
    link: "/services",
    desc: "Nettoyage, préparation et transformation des données brutes afin de garantir leur qualité et leur cohérence. Détection et traitement des valeurs manquantes ou aberrantes, normalisation, encodage et structuration des datasets pour l’analyse et le Machine Learning.",
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
    <section style={bgStyle}>
        <div className='bg-gradient-to-b from-black to-primary/5 text-white '>
            <div className='container py-40'>
              <div className=' grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                {/* Services Info  */}
                <div className='flex flex-col justify-center'>
                    <div className='text-left space-y-7 lg:max-w-[400px]'>
                        <motion.h1 variants={slideUp(0.3)} initial="initial" animate="animate" className='text-3xl lg:text-4xl font-bold'>Services</motion.h1>
                        <motion.p variants={slideUp(0.5)} initial="initial" animate="animate" className='text-white/70 text-xl'>Je développe des pipelines de données et des solutions robustes permettant de transformer les données brutes en informations fiables et exploitables, optimisant ainsi les flux de données et les applications business pour répondre aux besoins réels des entreprises</motion.p>
                        <div className='flex items-center gap-4'>
                            <motion.button variants={slideUp(0.7)} initial="initial" animate="animate" className=' text-primary rounded font-bold px-5  !bg-white text-xs py-3 md:text-base hover:red-shadow'>En savoir plus</motion.button>
                           
                            <a href="./cv_hugues.pdf">
                            <motion.button variants={slideUp(0.9)} initial="initial" animate="animate" className='border border-white/50 rounded-lg px-4  text-xs md:text-base flex items-center gap-2 py-3  '>
                                <FiDownload/>
                                Telecharger CV
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
                                key={service.id} // Ajout de la clé unique
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