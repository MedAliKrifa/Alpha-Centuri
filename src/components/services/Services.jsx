import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        Exploring beyond the stars,
          <br /> creating tomorrow’s possibilities today.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/antimatter.png" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Building</motion.b> Pathways.
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>To the </motion.b> Universe.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2> Spacecraft Manufacturing</h2>
          <p>
          Alpha Centauri LLC produces state-of-the-art spacecraft, from cargo ships to luxury and family vessels, equipped with advanced fusion and antimatter engines for peak performance and reliability.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Custom Ship Design</h2>
          <p>
          Alpha Centauri LLC produces state-of-the-art spacecraft, from cargo ships to luxury and family vessels, equipped with advanced fusion and antimatter engines for peak performance and reliability.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Maintenance and Support</h2>
          <p>
          Alpha Centauri LLC produces state-of-the-art spacecraft, from cargo ships to luxury and family vessels, equipped with advanced fusion and antimatter engines for peak performance and reliability.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Research and Development</h2>
          <p>
          Alpha Centauri LLC produces state-of-the-art spacecraft, from cargo ships to luxury and family vessels, equipped with advanced fusion and antimatter engines for peak performance and reliability.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
