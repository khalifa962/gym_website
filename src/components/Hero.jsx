import Header from "./Header";
import classes from "./Hero.module.css";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
/*Import Images */
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className={classes.hero} id="home">
      <div className="blur"></div>
      <div className={classes["left-h"]}>
        <Header />
        {/*Animated Ad*/}
        <div className={classes.ad}>
          <motion.div
            initial={{ left: "178px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The Best Gym In Your Town ! </span>
        </div>
        {/*Hero Text*/}
        <div className={classes["hero-text"]}>
          <div>
            <span className="stroke-text">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal Body !</span>
          </div>
          <div>
            <span>
              In here we wil help you to shape and build your ideal body, and
              live a healthy life
            </span>
          </div>
        </div>
        {/* Figures */}
        <div className={classes.figures}>
          <div>
            <span>
              <NumberCounter end={140} start={0} delay="4" preFix="+" />
            </span>
            <span>export coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={900} start={0} delay="1.5" preFix="+" />
            </span>
            <span>members have joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={80} start={0} delay="4" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/*Hero Buttons */}
        <div className={classes["hero-buttons"]}>
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      {/*Right Side*/}
      <div className={classes["right-h"]}>
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className={classes["heart-rate"]}
        >
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/*Hero Images */}
        <img
          className={classes["hero-image"]}
          src={hero_image}
          alt="hero_image"
        />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          className={classes["hero-image-back"]}
          src={hero_image_back}
          alt=""
        />
        {/*Calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className={classes.calories}
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
