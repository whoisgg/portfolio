import React, { useRef } from "react";
import "../assets/home.css";
import Arrow from "../assets/images/arrow.svg";
import Linkedin from "../assets/images/linkedin.png";
import Instagram from "../assets/images/instagram.png";
import Github from "../assets/images/github.png";

function Home() {
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="home-container">
      <section className="home-section" ref={sectionRef1}>
        <div className="section-content text-center">
          <p className="sm:text-4xl text-3xl">const GG = 'Gaspar Goycoolea';</p>
          <p className="sm:text-9xl text-8xl">whoIs(GG);</p>
        </div>
        <img
          src={Arrow}
          className="arrow"
          alt="arrow "
          onClick={() => scrollToSection(sectionRef2)}
        />
      </section>
      <section className="home-section" ref={sectionRef2}>
        <div className="section-content">
          <p className="text-xl text-justify">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <span className="social-links">
            <a
              href="https://www.linkedin.com/in/ggoycoo"
              target="_blank"
              rel="noopener noreferrer">
              <img src={Linkedin} className="social" alt="linkedin" />
            </a>
            <a
              href="https://www.instagram.com/sugoyco"
              target="_blank"
              rel="noopener noreferrer">
              <img src={Instagram} className="social" alt="instagram" />
            </a>
            <a
              href="https://www.github.com/whoisgg"
              target="_blank"
              rel="noopener noreferrer">
              <img src={Github} className="social" alt="github" />
            </a>
          </span>
        </div>
        <img
          src={Arrow}
          className="arrow2"
          alt="arrow2 "
          onClick={() => scrollToSection(sectionRef1)}
        />
      </section>
    </div>
  );
}

export default Home;
