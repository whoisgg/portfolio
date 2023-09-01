import React, { useRef } from "react";
import "../assets/home.css";
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
        <div className="section-content text-center madjust">
          <p className="sm:text-4xl text-3xl">const GG = 'Gaspar Goycoolea';</p>
          <p className="sm:text-9xl text-8xl">whoIs(GG);</p>
        </div>
        <div class="arrow" onClick={() => scrollToSection(sectionRef2)}>
          <span></span>
          <span></span>
        </div>
      </section>
      <section className="home-section" ref={sectionRef2}>
        <div className="section-content">
          <p className="sm:text-md  text-sm text-justify">
            <span className="sm:text-3xl text-lg">Hello World! </span>
            I'm Gaspar Goycoolea, a mostly self-taught developer who's found a
            passion for crafting solutions using JavaScript. By day, I navigate
            the intricacies of finance, strategically analyzing trends and
            making data-driven decisions. As the sun sets, I transition from
            number crunching to crafting elegant lines of code. My journey began
            in the realm of video games, where I honed my problem-solving skills
            and embraced the thrill of virtual challenges. This passion
            seamlessly evolved into coding, where I now channel that same
            immersive focus to build innovative solutions. Fueled by my
            background in finance, I approach coding with a unique blend of
            analytical thinking and creative problem-solving. Each line of code
            I write mirrors the strategic decisions I make during the day. From
            balancing budgets to debugging algorithms, my world is a harmony of
            numbers and syntax. In essence, I merge my financial expertise,
            gaming roots, and coding enthusiasm into a dynamic and ever-evolving
            journey. With each line of code, I embrace the thrill of exploration
            and creation, bridging gaps between numbers, games, and the digital
            frontier."
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
        <div class="arrow arrow2" onClick={() => scrollToSection(sectionRef1)}>
          <span></span>
          <span></span>
        </div>
      </section>
    </div>
  );
}

export default Home;
