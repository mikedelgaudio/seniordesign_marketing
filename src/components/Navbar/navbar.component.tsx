import { useState } from "react";
import "./navbar.component.css";

function Navbar() {
  const links = () => {
    return (
      <>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href={"#"} target="_blank">
            GitHub
            <span>
              <svg
                className="icons icon-light icon-sm"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M432 320h-32a16 16 0 0 0-16 16v112H64V128h144a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16H48a48 48 0 0 0-48 48v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V336a16 16 0 0 0-16-16ZM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 0 0 0 34L157.67 377a24 24 0 0 0 34 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24a24 24 0 0 0-24-24Z"
                />
              </svg>
            </span>
          </a>
        </li>
      </>
    );
  };

  const [toggled, setToggle] = useState(false);
  const hamburgerMenu = () => {
    return (
      <>
        <div
          className={`hamburger-menu-button ${toggled ? "open" : ""} `}
          onClick={toggled => setToggle(toggled => (toggled = !toggled))}
        >
          <div className="hamburger-menu" />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="nav-wrapper">
        <a className="nav-logo" href="/">
          Prism
        </a>
        <nav className="nav-desktop">
          <ul className="nav-items-container">{links()}</ul>
        </nav>
        <span className="nav-mobile">{hamburgerMenu()}</span>
      </div>
      {toggled ? (
        <nav className="nav-mobile">
          <ul className="nav-items-container">{links()}</ul>
        </nav>
      ) : null}
    </>
  );
}

export { Navbar };
