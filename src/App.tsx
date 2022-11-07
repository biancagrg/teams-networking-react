import React from "react";
import logo from "./logo.svg";
import "./App.css";
import selfie from "./images/me.png";

function MainMenu() {
  return (
    <ul id="top-menu-bar">
      <li>
        <a href="#" data-page="home">
          Home
        </a>
      </li>
      <li>
        <a href="#" data-page="skills">
          Skills
        </a>
      </li>
      <li>
        <a href="#" data-page="projects">
          Projects
        </a>
      </li>
      <li>
        <a href="#" data-page="languages">
          Languages
        </a>
      </li>
    </ul>
  );
}

function SideMenu() {
  return (
    <div id="side-menu">
      <section id="contact-me" className="side-menu-component">
        <h3>Contact Form</h3>
        <form id="contact-form" action="" method="get">
          <div className="contact-data">
            <input type="text" name="name" id="contact-name" placeholder="Your Name" className="contact-input" />
          </div>
          <div className="contact-data">
            <input type="email" name="mail" id="contactmail" placeholder="Your Mail" className="contact-input" />
          </div>

          <button type="submit" id="button">
            Contact me
          </button>
        </form>
      </section>
      <section className="side-menu-component">
        <img src={logo} className="App-logo" alt="logo" />
      </section>
    </div>
  );
}

function AppFooter() {
  return (
    <footer>
      <a href="https://github.com/biancagrg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-github"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
        GitHub
      </a>
      2022
    </footer>
  );
}

function AppHeader() {
  return (
    <header>
      <div id="banner">
        <div id="header-wrapper">
          <div id="avatar">
            <img src={selfie} alt="Image not found" width="180" />
          </div>
          <div id="header-info">
            <h1>CV</h1>
            <h2>Bianca GIURGIU</h2>
            <p id="motto">
              <span>Web Development</span> Student
            </p>
          </div>
        </div>
        <MainMenu />
      </div>
    </header>
  );
}

function ContentWrapper() {
  return (
    <section id="content">
      <SideMenu />
      <div id="main">...TODO...</div>
    </section>
  );
}

function App() {
  return (
    <>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </>
  );
}

export default App;
