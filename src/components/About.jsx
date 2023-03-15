import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import Tilt from "react-tilt";
import { services } from "../constants";

const ServiceCard = ({ index, title, icon}) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div 
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 minh-[280px] flex flex-col items-center justify-evenly">
        <img 
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"/>
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Humble, hardworking and ambitious individual with a great passion for
          innovation and software development. Committed at learning all the basics
          related to the ideal profile of a Front-End Developer, starting with HTML, CSS
          followed by JavaScript. I have knowledge on APIs, Functions, Objects, Arrays,
          etc. I have also practiced with frameworks: CSS frameworks Material-UI,
          JavaScript frameworks React (functional components). I prefer to use a
          practical approach to problem-solving and I’m focused to see things through to
          completion. I want to learn, and continuously improve my technical knowledge.
          I also consider myself as an articulate, confident and well-organized person.

      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;