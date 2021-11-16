import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Odometer from 'react-odometerjs';

import 'odometer/themes/odometer-theme-default.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function About() {
  const [{ value1, value2, value3, value4 }, setValue] = useState({
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
  });
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.addEventListener('scroll', () => {
        setValue({ value1: 500, value2: 800, value3: 1200, value4: 2000 });
      });
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__info">
          <span>Main-info</span>
          <h2>About me</h2>
        </div>
        <div className="about__wrapper">
          <div className="about__img">
            <div className="about__img-box">
              <img src={require('../img/profile-pic.png')} alt="" />
            </div>
            <div className="social-links">
              <a className="outer-shadow hover-in-shadow" href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a className="outer-shadow hover-in-shadow" href="#">
                <i class="fab fa-youtube"></i>
              </a>
              <a className="outer-shadow hover-in-shadow" href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a className="outer-shadow hover-in-shadow" href="#">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
          <div className="about__description">
            <p>
              <span>Hello my name is Mardon. I am web developer </span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis architecto pariatur at, iure nam repellendus unde
              corporis ducimus quod, ipsa deserunt nemo consectetur animi ex.
              Commodi accusantium, nulla ipsum velit vitae aliquid ullam ipsa
              totam, blanditiis nemo cum sequi voluptate modi esse molestiae
              voluptas aspernatur incidunt? Quas ullam minima dolore.
            </p>
            <div className="about-links">
              <a className="btn-1 outer-shadow hover-in-shadow" href="">
                Download Cv
              </a>
              <a className="btn-1 outer-shadow hover-in-shadow" href="">
                Hire me
              </a>
            </div>

            <div className="odometrs">
              <div className="odometr outer-shadow">
                <span>
                  <Odometer
                    animation=""
                    format="(,ddd),dd"
                    duration={2000}
                    value={value1}
                  />
                </span>
                <p>Project works</p>
              </div>
              <div className="odometr outer-shadow">
                <span>
                  <Odometer
                    animation=""
                    format="(,ddd),dd"
                    duration={2000}
                    value={value2}
                  />
                </span>
                <p>Project works</p>
              </div>
              <div className="odometr outer-shadow">
                <span>
                  <Odometer
                    animation=""
                    format="(,ddd),dd"
                    duration={2000}
                    value={value3}
                  />
                </span>
                <p>Project works</p>
              </div>
              <div className="odometr outer-shadow">
                <span>
                  <Odometer
                    animation=""
                    format="(,ddd),dd"
                    duration={2000}
                    value={value4}
                  />
                </span>
                <p>Project works</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
