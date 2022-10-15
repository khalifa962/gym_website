import classes from "./programs.module.css";
import { programsData } from "../data/ProgramsData";
import RightArrow from "../assets/rightArrow.png";
const Programs = () => {
  return (
    <section id="programs" className={classes.programs}>
      {/*Header*/}
      <div className="header">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">To Shape You</span>
      </div>
      {/*Programs Cards */}
      <div className={classes["program-categories"]}>
        {programsData.map((program, i) => (
          <div className={classes.category} key={i}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className={classes["join-now"]}>
              <span>Join Now</span>
              <img src={RightArrow} alt="right arrow" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
