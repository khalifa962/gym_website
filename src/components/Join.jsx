import { useRef } from "react";
import emailjs from "@emailjs/browser";
import classes from "./Join.module.css";
const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qawlfyp",
        "template_42a9y9d",
        form.current,
        "sohOUlIhQ6MLDUWlc"
      )
      .then(
        (result) => {
          console.log(result.tex);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="join-us" className={classes.join}>
      <div className={classes["left-j"]}>
        <hr />
        <div>
          <span className="stroke-text">ready to</span>
          <span> level up</span>
        </div>
        <div>
          <span> your body</span>
          <span className="stroke-text"> with us!</span>
        </div>
      </div>
      <div className={classes["right-j"]}>
        <form
          onSubmit={sendEmail}
          ref={form}
          className={classes["email-container"]}
        >
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your E-Mail"
          />
          <button className="btn">Join Now</button>
        </form>
      </div>
    </div>
  );
};
export default Join;
