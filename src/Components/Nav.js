import React from 'react';

function Nav() {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="navbar">
            <div className="navbar__logo" href="#">
              <a href="#">M</a>
            </div>
            <ul className="navbar__list">
              <li className="navbar__item">
                <a
                  href="#"
                  className="navbar__link outer-shadow hover-in-shadow"
                >
                  home
                </a>
              </li>
              <li className="navbar__item">
                <a
                  href="#"
                  className="navbar__link outer-shadow hover-in-shadow"
                >
                  about
                </a>
              </li>
              <li className="navbar__item">
                <a
                  href="#"
                  className="navbar__link outer-shadow hover-in-shadow"
                >
                  services
                </a>
              </li>
              <li className="navbar__item">
                <a
                  href="#"
                  className="navbar__link outer-shadow hover-in-shadow"
                >
                  portfolio
                </a>
              </li>
              <li className="navbar__item">
                <a
                  href="#"
                  className="navbar__link outer-shadow hover-in-shadow"
                >
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
