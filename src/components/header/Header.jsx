import React, { useState } from "react";
import "./header.css";
import CV from "../../assets/AryaKumarSundaram-resume.pdf";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBadgeCheck,
  HiOutlinePhotograph,
  HiOutlineMail,
  HiX,
  HiOutlineMenu,
} from "react-icons/hi";
import { HiDownload } from "react-icons/hi";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          AryaKS
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <HiOutlineHome className="nav__icon" />
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <HiOutlineUser className="nav__icon" />
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlineBadgeCheck className="nav__icon" />
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#!"
                className="nav__link"
                onClick={(e) => {
                  e.preventDefault();

                  // Trigger download of local PDF
                  const downloadLink = document.createElement("a");
                  downloadLink.href = CV;
                  downloadLink.download = "AryaKumarSundaram-resume.pdf";
                  document.body.appendChild(downloadLink);
                  downloadLink.click();
                  document.body.removeChild(downloadLink);

                  // Open external URL in new tab
                  window.open(
                    "https://resume-builder-test-new.masaischool.com/resume/public?resumeId=67d2baabdae27d0d642d20fa",
                    "_blank"
                  );
                }}
              >
                <HiDownload className="nav__icon" />
                Resume
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlinePhotograph className="nav__icon" />
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlineMail className="nav__icon" />
                Contact
              </a>
            </li>
          </ul>
          <HiX className="nav__close" onClick={() => showMenu(!Toggle)} />
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <HiOutlineMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
