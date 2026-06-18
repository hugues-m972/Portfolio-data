"use client"
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import {FiDownload} from "react-icons/fi"
import BannerImg from "../../assets/photo.jpg";
import Grains from "../../assets/grain.png";
import { slideUp } from '../Hero/Hero';


const Banner = () => {
    const bgGrains = {
      backgroundImage: `url(${Grains.src})`,
      backgroundPosition: "center",
    };
  return (
    <section className='bg-black text-white'>
        <div className="container pb-10">
          <div style={bgGrains} className='bg-gray-950 rounded-3xl py-14 px-5 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 translate-y-36'>
            {/* Banner Image  */}
            <motion.div initial={{ opacity: 0}} animate= {{ opacity:1}} transition={{ duration : 0.8, delay: 0.5}}  className='flex items-end justify-center'>
                <Image src={BannerImg} alt='banner' className=' w-[300px] lg:w-[400px]'/>
            </motion.div>
            {/* Banner Info  */}
            <div className='flex flex-col justify-center'>
                <div className='text-left space-y-7 lg:max-w-[400px]'>
                    <motion.h1 variants={slideUp(0.3)} initial="initial" animate="animate" className='text-3xl lg:text-4xl font-bold'>Software Engineer — Junior</motion.h1>
                    <motion.p variants={slideUp(0.5)} initial="initial" animate="animate" className='text-white/70'>
                      Fresh graduate in Information Systems and Software (SIL), I am passionate about designing and developing robust software solutions.
                      I enjoy transforming complex problems into performant applications using modern technologies such as Python, Java, JavaScript, SQL, Docker and Git.
                      My goal is to contribute to building reliable, scalable and high-impact software — following best practices, clean code principles and agile methodologies.
                    </motion.p>
                    <div className='flex items-center gap-4'>
                        <motion.button variants={slideUp(0.7)} initial="initial" animate="animate" className='btn text-xs py-3 md:text-base'>Discover my work</motion.button>
                        <a href="./cv_hugues.pdf">
                        <motion.button variants={slideUp(0.9)} initial="initial" animate="animate" className='border border-white/50 rounded-lg px-4  text-xs md:text-base flex items-center gap-2 py-3  '>
                            <FiDownload/>
                            Download Resume
                        </motion.button>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Banner
