import React from "react";
import "../assets/home.css";
import "../assets/experience.css";
import Logo1 from "../assets/images/logo1.png";
import Logo2 from "../assets/images/logo2.png";
import Logo3 from "../assets/images/logo3.png";
import Logo4 from "../assets/images/logo4.png";
import Logo5 from "../assets/images/logo5.jpeg";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";

function Experience() {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)",
  }));

  const clamp = (value, clampAt = 30) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };
  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });

  return (
    <div className="container" {...bind()}>
      {logos.map((src, index) => (
        <animated.div
          key={index}
          className={`card ${index === 0 || index === 1 ? "bg-white" : ""}`}
          style={{ ...style, backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
}

export default Experience;
