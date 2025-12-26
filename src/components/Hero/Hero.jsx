"use client";
import React from "react";
import Image from "next/image";
import HeroImg from "../../assets/hugues.jpg";
import Circle from "../../assets/red.webp";
import Wall from "../../assets/wall.jpg";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const wallBackground = {
  backgroundImage: `url(${Wall.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export const slideUp = (delay) => {
  return {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const Hero = () => {
  const handleScrollToServices = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section style={wallBackground} className="bg-black text-white mt-20">
      <div className="bg-gradient-to-b from-primary/50 to-black">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
          {/* brand info */}
          <div className="flex flex-col justify-center md:text-left py-14 md:py-0">
            <div className="text-center md:text-left space-y-6">
              <motion.p
                variants={slideUp(0.3)}
                initial="initial"
                animate="animate"
                className="text-4xl"
              >
                Hello, Je suis
              </motion.p>
              <motion.p
                variants={slideUp(0.5)}
                initial="initial"
                animate="animate"
                className="text-5xl lg:text-8xl font-Satisfy text-outline"
              >
                hugues medegnon
              </motion.p>
              <motion.p
                variants={slideUp(0.7)}
                initial="initial"
                animate="animate"
                className="text-xl leading-snug"
              >
                Architecte et constructeur de données, je transforme des flux bruts en informations fiables et exploitables.
Passionné par les pipelines, l’ETL et l’optimisation des données, je conçois des solutions robustes qui permettent aux équipes d’analyse et aux décideurs de prendre des décisions éclairées. Curieux, rigoureux et pragmatique, je crée des infrastructures data fiables pour donner vie aux projets et maximiser l’impact business.
              </motion.p>

              {/* Bouton En savoir plus */}
              <motion.button
                variants={slideUp(0.9)}
                initial="initial"
                animate="animate"
                className="btn"
                onClick={handleScrollToServices}
              >
                En savoir plus
              </motion.button>

              {/* Stats Section */}
              <motion.div
                variants={slideUp(1.1)}
                initial="initial"
                animate="animate"
                className="flex justify-around bg-gradient-to-b from-primary/50 to-black border-2 border-primary/80 rounded-xl hover:red-shadow hover:scale-105 md:max-w-[400px] !mt-[44px] p-4"
              >
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold">
                    <CountUp end={3} start={0} suffix="+" delay={1.4} />
                  </p>
                  <p className="text-xl">Experience</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold">
                    <CountUp end={10} start={0} suffix="+" delay={1.4} />
                  </p>
                  <p className="text-xl">Projects</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold">
                    <CountUp end={2} start={0} suffix="+" delay={1.4} />
                  </p>
                  <p className="text-xl">Clients</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center md:justify-end items-center relative"
          >
            <div className=" bg-black rounded-3xl overflow-hidden h-[500px] flex items-end relative group hover:red-shadow hover:scale-105 duration-700 ">
              <Image
                src={Circle}
                alt="circle"
                className=" absolute top-4 -left-0 -z-0 animate-spin-superslow group-hover:animate-pulse duration-300"
              />
              <Image
                src={HeroImg}
                alt="Heroimg"
                className="w-[300px] relative z-10 group-hover:scale-90 duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
