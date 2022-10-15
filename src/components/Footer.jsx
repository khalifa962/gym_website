import classes from "./Footer.module.css";
import Github from "../assets/github.png";
import Instagram from "../assets/instagram.png";
import LinkedIn from "../assets/linkedin.png";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className={classes["footer-container"]}>
      <hr />
      <div className={classes.footer}>
        <div className={classes.social}>
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className={classes["logo-f"]}>
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur"></div>
      <div className="blur"></div>
    </div>
  );
};
export default Footer;
