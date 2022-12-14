import classes from "./Reasons.module.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import nb from "../assets/nb.png";
import adidas from "../assets/adidas.png";
import nike from "../assets/nike.png";
import tick from "../assets/tick.png";

const Reasons = () => {
  return (
    <div id="reasons" className={classes.reasons}>
      <div className={classes["left-r"]}>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className={classes["right-r"]}>
        <span>Some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>
        <div className={classes["details-r"]}>
          <div>
            <img src={tick} alt="" />
            <span>over 140+ expert coaches.</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>train smarter and faster than before.</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 free program for new members.</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>reliable partners.</span>
          </div>
        </div>
        <span
          style={{
            color: "gray"
          }}
        >
          our parteners
        </span>
        <div className={classes.partners}>
          <img src={nb} alt="" />
          <img src={nike} alt="" />
          <img src={adidas} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Reasons;
