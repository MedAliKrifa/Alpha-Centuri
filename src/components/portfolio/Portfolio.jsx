import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Antimatter (αAME)",
    img: "/antimatter.png",
    desc: "Produces energy through the annihilation of matter with antimatter. Extremely efficient, producing a vast amount of energy from a small amount of fuel.",
  },
  {
    id: 2,
    title: "Celestial Navigator",
    img: "/Celestial Navigator.png",
    desc: "Navigate the Cosmos with Unmatched Luxury.Luxurious design with 2 spacious suites, gourmet kitchen, and premium life support systems.Superior climate control, deluxe entertainment options, and panoramic viewing areas.",
  },
  {
    id: 3,
    title: "Argentum Starflyer",
    img: "/Argentum Starflyer.png",
    desc: "Efficiency Meets Elegance in the Stars, Compact and sleek, designed for 2 passengers with foldable beds, a small kitchenette, and a water recycling system.Advanced air purification and oxygen generation systems, climate control, and a basic entertainment system for enjoyable short trips.",
  },
  {
    id: 4,
    title: "AquaStar Voyager",
    img: "/compact - Aquastar.png",
    desc: "Embrace the purity of space with every sip. AquaStar Voyager, compact yet mighty, ensures you’re never far from a refreshing drink, even in the farthest reaches of the cosmos.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Our Galactic Achievements</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
