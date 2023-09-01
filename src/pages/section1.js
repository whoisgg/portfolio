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

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

const logoTextMap = {
  [Logo1]: {
    text: (
      <>
        2007 - 2012
        <br />
        Agricultural Engineer
        <br />
        Pontifical Catholic University of Chile
      </>
    ),
    className: "logo-text",
  },
  [Logo2]: {
    text: (
      <>
        2010 - 2011
        <br />
        International Exchange Program, Managerial Economics
        <br />
        University of California, Davis
      </>
    ),
    className: "logo-text",
  },
  [Logo3]: {
    text: (
      <>
        2016 - 2017
        <br />
        Master's Degree in Finance and Investments
        <br />
        Ese Business School
      </>
    ),
    className: "logo-text",
  },
  [Logo4]: {
    text: (
      <>
        2016 - 2016
        <br />
        Executive Finance Programme: Global Perspectives
        <br />
        London School of Economics
      </>
    ),
    className: "logo-text",
  },
  [Logo5]: {
    text: (
      <>
        2020 - 2021
        <br />
        Full-Stack Developer Ruby on Rails
        <br />
        Desafio Latam
      </>
    ),
    className: "logo-text",
  },
};

function Experience() {
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
      {logos.map((src, index) => {
        const isLogo1 = index === 0;
        const isLogo2 = index === 1;
        const cardStyle = {
          ...style,
          backgroundImage: `url(${src})`,
          backgroundSize: isLogo1 || isLogo2 ? "contain" : "cover",
        };

        return (
          <animated.div // Use animated.div from react-spring
            key={index}
            className={`card ${isLogo1 || isLogo2 ? "bg-white" : ""}`}
            style={cardStyle}>
            <div className="logo-text card">{logoTextMap[src].text}</div>
          </animated.div>
        );
      })}
    </div>
  );
}

export default Experience;
