import React, { useState } from 'react';

function StyleSwitcher({ switcher, colorSwitcher, ToggleDark, light }) {
  return (
    <div>
      <div
        className={
          switcher
            ? 'style-switcher outer-shadow open'
            : 'style-switcher outer-shadow '
        }
      >
        <div
          className="style-switcher-toggler s-icon outer-shadow hover-in-shadow"
          onClick={colorSwitcher}
        >
          <i className="fas fa-cog fa-spin"></i>
        </div>
        <div
          className="day-night s-icon outer-shadow hover-in-shadow"
          onClick={ToggleDark}
        >
          <i className={light ? 'fas fa-moon' : 'fas fa-sun'}></i>
        </div>

        <h4>Theme Colors</h4>
        <div className="colors">
          <span
            className="color-1"
            onclick="setActivateStyle('color-1')"
          ></span>
          <span
            className="color-2"
            onclick="setActivateStyle('color-2')"
          ></span>
          <span
            className="color-3"
            onclick="setActivateStyle('color-3')"
          ></span>
          <span
            className="color-4"
            onclick="setActivateStyle('color-4')"
          ></span>
          <span
            className="color-5"
            onclick="setActivateStyle('color-5')"
          ></span>
        </div>
      </div>
    </div>
  );
}

export default StyleSwitcher;
