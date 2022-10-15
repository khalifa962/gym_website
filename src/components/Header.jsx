import classes from "./Header.module.css";
import Logo from "../assets/logo.png";
import Bars from "../assets/bars.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menu, setMenu] = useState(false);
  return (
    <div className={classes.header}>
      <img className={classes.logo} src={Logo} alt="logo" />
      {menu === false && mobile === true ? (
        <div
          onClick={() => setMenu((prev) => !prev)}
          className={classes.burger}
        >
          <img
            style={{ width: "1.5rem", height: "1.5rem" }}
            src={Bars}
            alt=""
            // onClick={}
          />
        </div>
      ) : (
        <ul onClick={() => setMenu(false)} className={classes["header-menu"]}>
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              onClick={() => setMenu(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              spy={true}
              smooth={true}
              onClick={() => setMenu(false)}
            >
              Programms
            </Link>
          </li>
          <li>
            <Link
              to="reasons"
              spy={true}
              smooth={true}
              onClick={() => setMenu(false)}
            >
              Why Us?
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              spy={true}
              smooth={true}
              onClick={() => setMenu(false)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              onClick={() => setMenu(false)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Header;
