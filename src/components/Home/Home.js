import React from "react";
import "./Home.css";
import HomeContent from "../HomeContent/HomeContent";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__top">
          <div className="home__top__content">
            <h1>Funding Student since 2024</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus culpa eius unde doloribus, corrupti quidem.
            </h3>
            <div className="home__top__content__input">
              <input type="text" placeholder="Enter Your Email"/>
              <button className="button">Join For Free</button>
            </div>
          </div>
          <div className="home__top__image">
            <img src="./homepage/donation2.svg" alt="" />
            
          </div>
        </div>
        <div className="home__middle">
          <div className="home__middle__heading">
            <p className="big">
              Join The Community Of Over <span>100k+</span> Students From UIU
            </p>
          </div>
          <div className="home__middle__content">
            <HomeContent></HomeContent>
          </div>
        </div>
        <div className="home__bottom">
          <div className="home__bottom__content">
            <p>
              Welcome to our dedicated section{" "}
              <span>for United International University Students!</span> We
              understand the financial challenges of pursuing higher education,
              which is why we offer tailored loan solutions exclusively from UIU
              students
            </p>
          </div>
          <div className="home__bottom__brand">
            <div className="home__bottom__brand__university">
              <img src="./resoruces/UIULogo.png" alt="" />
            </div>
            <div className="home__bottom__brand__socialLinks">
              <img src="./resoruces/socialMedia/insta.svg" alt="Instagram" />
              <img src="./resoruces/socialMedia/twit.svg" alt="X" />
              <img src="./resoruces/socialMedia/yt.svg" alt="YouTube" />
              <img src="./resoruces/socialMedia/git.svg" alt="GitHub" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
