import React, { useState } from "react";
import { motion } from "framer-motion";
import classes from "./Testimonials.module.css";
import { testimonialsData } from "../data/TestimonialsData";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  const previousHandler = () => {
    selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1);
  };
  const nextHandler = () => {
    selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1);
  };
  return (
    <div className={classes.testimonials} id="testimonials">
      <div className={classes["left-t"]}>
        <span>Testimonials</span>
        <span className="stoke-text">what they</span>
        <span>say about us?</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className={classes["right-t"]}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className={classes.arrows}>
          <img onClick={previousHandler} src={leftArrow} alt="" />
          <img onClick={nextHandler} src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
