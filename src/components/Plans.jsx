import classes from "./Plans.module.css";
import whiteTick from "../assets/whiteTick.png";
import { plansData } from "../data/PlansData";
const Plans = () => {
  return (
    <div id="plans" className={classes["plans-container"]}>
      <div className="blur"></div>
      <div className="blur"></div>
      <div className="header" style={{ gap: "2rem" }}>
        <span>ready to start</span>
        <span className="stroke-text">your journey</span>
        <span>now with us</span>
      </div>
      {/*Plans Cards */}
      <div className={classes.plans}>
        {plansData.map((plan, i) => (
          <div className={classes.plan} key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className={classes.features}>
              {plan.features.map((feature, idx) => (
                <div className={classes.feature} key={idx}>
                  <img src={whiteTick} alt="" />
                  <span key={idx}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See More Benfits</span>
            </div>
            <button className="btn">Join Now </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Plans;
