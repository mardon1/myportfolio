import React from 'react';
import { Link } from 'react-scroll';

import Typed from 'react-typed';

const textLines = [
  `<span> Web developer.</span>`,
  `<span> Student of TSUE.</span>`,
  `<span> Good person.</span>`,
];

function Home() {
  return (
    <section className="home">
      <div className="effect-wrap">
        <div className="effect-1 effect">
          <div></div>
        </div>
        <div className="effect effect-2">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="effect effect-3"></div>
        <div className="effect effect-4">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="effect effect-5"></div>
      </div>
      <div className="container home__container">
        <div className="home__text">
          <h3>Hello I'm</h3>
          <h2>
            Mardon
            <Typed strings={textLines} typeSpeed={40} backSpeed={50} loop />
          </h2>
          <Link
            className="btn-1 outer-shadow hover-in-shadow"
            to="about"
            smooth={true}
          >
            More about me
          </Link>
        </div>
        <div className="home__img ">
          <div className="img-box ">
            <img src={require('../img/profile-pic.png')} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
