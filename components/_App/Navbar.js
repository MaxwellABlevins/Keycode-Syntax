import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const cart = useSelector((state) => state.cart);
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header id="header" className="headroom">
        <div className="startp-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img className="small-logo" src="/images/logo.jpg" alt="logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link
                      href="/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/" && "active"
                      }`}
                    >
                      Home 
                    </Link>
                    </li>

                  <li className="nav-item">
                    <Link
                      href="/about-1/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/about-1/" && "active"
                      }`}
                    >
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Portfolio <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/features/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/features/" && "active"
                          }`}
                        >
                         
                          Projects <Icon.ChevronDown />
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/web-development/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/web-development/" && "active"
                              }`}
                            >
                              Web Development
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/app-development/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/app-development/" && "active"
                              }`}
                            >
                              App Development
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/game-development/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/game-development/" && "active"
                              }`}
                            >
                              Game Development
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/ecommerce/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/ecommerce/" && "active"
                              }`}
                            >
                              E-Commerce 
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/project-details/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/project-details/" && "active"
                          }`}
                        >
                          Agency Portfolio
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/blog-1/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Others option */}
              <div className="others-option">

                <Link href="/login/" className="btn btn-primary">
                  Login
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
