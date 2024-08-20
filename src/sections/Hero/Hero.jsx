import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import LinkedinIcon from "../../assets/linkedin-light.svg";
import CV from "../../assets/cv.pdf";
function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModecontainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Daryl John Mirontos"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Daryl John
          <br />
          Mirontos
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="https://twitter.com" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/djmirontos" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <img src={LinkedinIcon} alt="Linkein icon" />
          </a>
        </span>
        <p>
          With a passion fr developing modern React web apps for commercial
          business.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
