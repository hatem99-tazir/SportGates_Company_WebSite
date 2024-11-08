import "./App.css";
import "./styles/Home.css";

// img
import logo from "./assets/logo.png";
import back1 from "./assets/back1.png";
import img2 from "./assets/img2.png";
import sportLogo from "./assets/sportLogo.png";
import arrowDown from "./assets/arrowDown.png";
import prod1 from "./assets/prod2.png";
import prod2 from "./assets/prod3.png";
import prod3 from "./assets/prod4.png";
import prod4 from "./assets/prod5.png";

import loader from "./assets/loader (2).gif";

import message from "./assets/telegram.png";
import call from "./assets/call.png";
import email from "./assets/email.png";
import location from "./assets/location.png";
import up_cheveron from "./assets/up-chevron.png";
//socials
import facebook from "./assets/socials/facebook.png";
import instagram from "./assets/socials/instagram.png";
import x from "./assets/socials/twitter.png";
import youtube from "./assets/socials/media.png";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HoverComponent from "./Components/MUI/HoverComponent";
import Products from "./Components/products";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";

function openLinkInNewWindow(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Main page with sections */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Footer />
              </>
            }
          />
          {/* Separate page with Header, Home, Products, and Footer */}
          <Route
            path="/products"
            element={
              <>
                <Home />
                <Products />
                <Footer />
              </>
            }
          />
          <Route
            path="/product-details/:product"
            element={<ProductDetails />}
          />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <motion.div id="home" className="section home px-80 box-sizing">
      <motion.div
        className="w-full relative h-full border-radius-5 bg-grey box-sizing flex justify-space-between  px-80 "
        initial={{ opacity: 0, top: "100px" }}
        animate={{ opacity: 1, top: "0", transition: { delay: 2.2 } }}
      >
        <motion.div className="home-left flex-column justify-center relative">
          <motion.div className="relative small-hr bg-orange border-radius-5 my-10"></motion.div>
          <motion.p className="sec-text w-1-2 bold relative">
            Company Name Is Now Open And Only For It Cause.
          </motion.p>
          <motion.p className="w-1-2 my-20 relative">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </motion.p>

          <motion.div className="action-button bg-orange">
            <p className="btn">Discover Now</p>
          </motion.div>
        </motion.div>

        <div className="home-right relative">
          <motion.div className="back-circle relative">
            <motion.img src={back1} alt="back" className="back-img" />
            <div className="card-bubble"></div>

            <div className="card-bubble card-bubble2"></div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="section fixed preloader-container relative">
        <motion.img
          alt=""
          src={loader}
          className="logo-img"
          initial={{ scale: 1.2,  }}
          animate={{ scale: 0,  transition: { delay: 1.6 } }}
        />
      </motion.div>
    </motion.div>
  );
};

const Section2 = () => {
  return (
    <div
      id="section2"
      className="section section2 w-full h-full flex justify-space-between px-80 box-sizing"
    >
      <div className="flex relative align-items-center justify-center section2-left  h-full  border-radius-5 bg-grey">
        <img alt=" " src={img2} />
      </div>
      <div className="flex section2-right flex-column justify-center">
        <p className="sec-text bold ">
          Company Name Is Now Open And Only For It Cause.
        </p>
        <p className="small-text">
          Company Name Is Now And Only For It Cause.Company Name Is Now Open And
          Only For It Cause, Company Name Is Now Open And Only For It Cause, Co.
        </p>
        <div className="my-20">
          <p className="bold">Company Policy</p>
          <p className="small-text">
            Company Name Is Now Open And Only For It Cause.Company Name Is Now
            Open And Only For It Cause, Company Name Is Now Open And Only For It
            Cause, Company Name Is Now It Cause.
          </p>
        </div>

        <div className="">
          <p className="bold">Company Policy</p>
          <p className="small-text">
            Company Name Is Now Open And Only For It Cause.Company Name Is Now
            Open And Only For It Cause, Company Name Is Open And Only For It
            Cause, Company Name Is Now Open And Only For It Cause.
          </p>
        </div>

        <div className="action-button bg-orange my-20">
          <p className="btn">Discover Now</p>
        </div>
      </div>
    </div>
  );
};

const Section3 = () => {
  return (
    <div
      id="section3"
      className="section section3  w-full h-full flex-column justify-space-between px-80 box-sizing "
    >
      <div className="">
        <div className="section3-banner bg-black w-full flex justify-space-between border"></div>
      </div>

      <div className="section3-content flex justify-space-between py-20 box-sizing">
        <div className="section3-left h-full w-1-2 flex-column justify-space-between">
          <p className="bold grey">
            SPORT GATE <span className="">.</span>
          </p>
          <p className="sec-text bold">
            Company Name Is
            <span className="bg-orange white border-radius-5">
              {" "}
              Now Open And Only For It{" "}
            </span>{" "}
            Cause.
          </p>
          <p className="my-20">
            Company Name Is Now Open And Only For It Cause.Company Name Is Now
            Open And Only For It Cause, Company Name Is Now Open And Only For It
            Cause, Company Name Is Now Open And Only For It Cause.
          </p>
          <div className="fit-content-hr bg-black "></div>

          <div className=" flex justify-space-between w-full ">
            <div className="flex-column justify-space-between w-1-2   -20 py-20">
              <img alt="" src={sportLogo} className="logo-img" />
              <p className="bold my-10"> Company Name Is Now Open</p>
              <p className="small-text">
                {" "}
                Company Name Is Now Open, Company Name Is Now Open Company Name
                Is Now Open Company Name Is Now Open.
              </p>
            </div>

            <div className="flex-column justify-space-between w-1-2   -20 py-20 border-radius-5">
              <img alt="" src={sportLogo} className="logo-img" />
              <p className="bold my-10"> Company Name Is Now Open</p>
              <p className="small-text">
                {" "}
                Company Name Is Now Open, Company Name Is Now Open Company Name
                Is Now Open Company Name Is Now Open.
              </p>
            </div>
          </div>
        </div>
        <div className="section3-right flex-column border-radius-5 justify-center bg-grey h-full w-1-2"></div>
      </div>
    </div>
  );
};

const Section4 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your return policy ?",
      answer:
        "Our return policy is 30 days. You can track your order through the tracking link sent to your email. You can track your order through the tracking link sent to your email.",
    },
    {
      question: "How do I track my order ?",
      answer:
        "You can track your order through the tracking link sent to your email. You can track your order through the tracking link sent to your email. You can track your order through the tracking link sent to your email.",
    },
    {
      question: "Can I purchase items again ?",
      answer:
        "Yes, you can repurchase items from your order history. You can track your order through the tracking link sent to your email.",
    },
  ];

  return (
    <div
      id="section4"
      className="section4 section flex align-items-center justify-center w-full h-full px-80 box-sizing"
    >
      <div className="section4-content bg-grey w-full h-full flex-column align-items-center justify-center border-radius-5 py-20 box-sizing">
        <p className="sec-text bold">Frequently Asked Questions</p>
        <p className="small-text w-1-2 center-text my-20">
          Company Name Is Now Open, Company Name Is Now Open Company Name Is Now
          Open Company Name Is Now Open.Company Name Is Now Open, Company Name
          Is Now Open Company Name Is Now Open Company Name Is Now Open.
        </p>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="faq-item  pointer bg-white flex-column justify-space-between align-items-center w-full border-radius-5 my-10 box-sizing py-20"
            style={{ padding: "20px" }}
            onClick={() => toggleOpen(index)}
            initial={{ height: "auto" }}
            animate={{ height: openIndex === index ? "120px" : "60px" }}
            transition={{}}
          >
            <div className="flex justify-space-between w-full">
              <p className="faq-question bold grey small-text">
                {faq.question}
              </p>
              <motion.img
                alt=""
                src={arrowDown}
                className="logo-"
                x
                initial={{ rotate: "0" }}
                animate={{ rotate: openIndex === index ? "180deg" : "0" }}
              />
            </div>
            {openIndex === index && (
              <motion.p
                className="faq-answer flex align-items-start w-full small-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
        <div className="action-button bg-orange my-20">
          <p className="btn">Ask Our Team</p>
        </div>
      </div>
    </div>
  );
};

const Section5 = () => {
  return (
    <div
      id="section5"
      className="section5 section flex-column  align-items-center justify-space-between w-full h-full px-80 box-sizing"
    >
      <p className="sec-text bold my-20">Relevant Company Products</p>
      <p className="small-text">
        Company Name Is Now Open, Company Name Is Company Name Is Now Open
        Company Name Is Now Open.
      </p>
      <div className="section5-content flex justify-space-between align-items-center w-full box-sizing">
        <div className="section5-left relative h-full w-1-2 border-radius-5   flex-column justify-space-between align-items ">
          <div className="section5-product flex relative justify-space-between align-items bg-grey py-20 px-20 box-sizing">
            <div className="product-img h-full bg-white border-radius-5 px-10 box-sizing py-10">
              <img alt="" src={prod2} className="" />
            </div>
            <div className="product-texts flex-column">
              <p className="bold small-text">Relevant Company Products</p>

              <p className="small-text my-10">
                Company Name Is Now Open, Company Name Is Company Name Is Now
                Open Company Name Is Now Open.
              </p>
            </div>
            <div className="product-price flex align-items-center h-full">
              <p className="small-text bold bg-orange white px-20 py-10 border-radius-20">
                5400,00 DA
              </p>
            </div>
          </div>

          <div className="section5-product flex relative justify-space-between align-items bg-grey py-20 px-20 box-sizing">
            <div className="product-img h-full bg-white border-radius-5 px-10 box-sizing py-10">
              <img alt="" src={prod3} className="" />
            </div>
            <div className="product-texts flex-column">
              <p className="bold small-text">Relevant Company Products</p>
              <p className="small-text my-10">
                Company Name Is Now Open, Company Name Is Company Name Is Now
                Open Company Name Is Now Open.
              </p>
            </div>
            <div className="product-price flex align-items-center h-full">
              <p className="small-text bold bg-orange white px-20 py-10 border-radius-20">
                5400,00 DA
              </p>
            </div>
          </div>

          <div className="section5-product flex relative justify-space-between align-items bg-grey py-20 px-20 box-sizing">
            <div className="product-img h-full bg-white border-radius-5 px-10 box-sizing py-10">
              <img alt="" src={prod4} className="" />
            </div>
            <div className="product-texts flex-column">
              <p className="bold small-text">Relevant Company Products</p>
              <p className="small-text my-10">
                Company Name Is Now Open, Company Name Is Company Name Is Now
                Open Company Name Is Now Open.
              </p>
            </div>
            <div className="product-price flex align-items-center h-full">
              <p className="small-text bold bg-orange white px-20 py-10 border-radius-20">
                5400,00 DA
              </p>
            </div>
          </div>
        </div>
        <div className="section5-right bg-grey border-radius-5 flex-column justify-space-evenly align-items-center">
          <img alt="" src={prod1} />

          <div className="action-button bg-orange">
            <p className="btn">See Our Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <motion.div
      id="section6"
      className="section footer w-full h-full flex-column justify-center px-80 box-sizing"
    >
      <div className="footer-top border-radius-5 bg-grey p-20 mb-4 flex align-items-center justify-space-between">
        <div className="footer-top-left w-25">
          <h1 className="bold sec-text">Subscribe To Our Newsletter</h1>
        </div>
        <div className="footer-top-right w-1-2 flex align-items-center justify-end ">
          <div className="flex flex-col ">
            <p>join our newsletter to get latest news , offers , and updates</p>
            <div className="flex align-items-baseline  justify-flex-start">
              <input
                className="mt-4 w-90 border-radius-20 py-20 box-sizing"
                type="text"
                placeholder="enter your email"
              />
              <div className="action-button  send-message-btn flex justify-center">
                <p className="btn">
                  <img
                    src={message}
                    alt="messager-icon"
                    height="20"
                    className="inverted-image50"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom border-radius-5 bg-grey p-20 flex ">
        <div className="w-25 ">
          <h3>Our Services</h3>
          <ul>
            <li>Personnel Training</li>
            <li>Group Fitness Class</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className="w-25">
          <h3>Useful links</h3>
          <ul>
            <li>Home</li>
            <li>Company</li>
            <li>About</li>
            <li>Contact</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className="w-25">
          <h3>Support</h3>
          <ul>
            <li>Contact us</li>
            <li>Help center</li>
            <li>Privacy policy</li>
            <li>Terms & conditions</li>
          </ul>
        </div>
        <div className="w-25">
          <h3>Our Address & Contact</h3>
          <ul>
            <li className="flex align-items-center justify-flex-start">
              <img
                className="contact-img mr-10"
                src={email}
                alt="email"
                height="37"
              />
              <div className="flex flex-column">
                <span className="grey small-text">Email</span>
                <span className="bold">contact@email.com</span>
              </div>
            </li>
            <li className="flex align-items-center justify-flex-start">
              <img
                className="contact-img mr-10"
                src={call}
                alt="email"
                height="37"
              />
              <div className="flex flex-column">
                <span className="grey small-text">Phone</span>
                <span className="bold">+213 123456789</span>
              </div>
            </li>
            <li className="flex align-items-center justify-flex-start">
              <img
                className="contact-img mr-10"
                src={location}
                alt="email"
                height="37"
              />
              <div className="flex flex-column">
                <span className="grey small-text">Location</span>
                <span className="bold">Soliss , SMK , constantine</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-radius-5   flex ">
        <div className="w-50 flex align-items-center justify-flex-start social-link">
          <div
            className="border-radius-20 bg-grey p-2 flex align-items-center mr-10 pointer "
            onClick={() => openLinkInNewWindow("#")}
          >
            <img
              src={facebook}
              alt="facebook-logo"
              className="mr-10"
              height="20"
            />
            <span className="small-text bold">Facebook</span>
          </div>
          <div
            className="border-radius-20 bg-grey p-2 flex align-items-center mr-10 pointer social-link"
            onClick={() => openLinkInNewWindow("#")}
          >
            <img
              src={instagram}
              alt="facebook-logo"
              className="mr-10"
              height="20"
            />
            <span className="small-text bold">Instagram</span>
          </div>
          <div
            className="border-radius-20 bg-grey p-2 flex align-items-center mr-10 pointer social-link"
            onClick={() => openLinkInNewWindow("#")}
          >
            <img src={x} alt="facebook-logo" className="mr-10" height="20" />
            <span className="small-text bold">Twitter</span>
          </div>
          <div
            className="border-radius-20 bg-grey p-2 flex align-items-center mr-10 pointer social-link"
            onClick={() => openLinkInNewWindow("#")}
          >
            <img
              src={youtube}
              alt="facebook-logo"
              className="mr-10"
              height="20"
            />
            <span className="small-text bold">Youtube</span>
          </div>
        </div>
        <div className="w-50 flex align-items-center justify-end social-link">
          <div className="border-radius-20 bg-grey p-2 flex align-items-center mr-10 pointer ">
            <span className="small-text bold">© 2024 all rights reserved</span>
          </div>
          <div className="border-radius-20 bg-grey p-2 flex align-items-center mr-10 pointer ">
            <span className="small-text bold">Terms & conditions </span>
          </div>
          <div className="border-radius-20 bg-grey p-2 flex align-items-center mr-10 pointer ">
            <span className="small-text bold">
              <img src={up_cheveron} alt="up-cheveron" height="15" />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Header = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const [isHovered, setIsHovered] = useState(false);

  const [selectedNavIndex, setSelectedNavIndex] = useState(0);
  const categories = [
    { id: 1, name: "Volley", image: prod1 },
    { id: 2, name: "BasketBall", image: prod2 },
    { id: 3, name: "BasketBall", image: prod3 },
    { id: 4, name: "Gym", image: prod4 },
    { id: 5, name: "Fitness", image: prod4 },
    { id: 6, name: "Cat 2", image: prod3 },
    { id: 7, name: "BasketBall", image: prod2 },
    { id: 8, name: "Tenis", image: prod1 },
  ];

  return (
    <motion.div
      className="header max-z"
      initial={{ top: "-100px" }}
      animate={{
        top: 0,
        transition: { delay: 2.5, duration: 0.3, ease: "circInOut" },
      }}
    >
      <div className="logo flex align-items-end ">
        <p className="logo-text ">
          SPORT GATE <span className="orange">.</span>
        </p>
      </div>

      <div className="navs flex">
        <motion.p
          className="nav-item mx-20 orange small-text pointer"
          onClick={() => {
            if (document.getElementById("home")) {
              scrollToSection("home");

              setSelectedNavIndex(0);
            } else {
              setTimeout(() => {
                setSelectedNavIndex(0);
                scrollToSection("home");
              }, 1000);
            }
          }}
          initial={{ color: "#ff6600" }}
          animate={
            selectedNavIndex === 0 ? { color: "#ff6600" } : { color: "#9babb8" }
          }
        >
          <Link to="/" className="link">
            Home
          </Link>
        </motion.p>
        <motion.p
          className="nav-item mx-20 grey small-text pointer"
          onClick={() => {
            if (document.getElementById("section2")) {
              scrollToSection("section2");
              setSelectedNavIndex(1);
            } else {
              setTimeout(() => {
                setSelectedNavIndex(1);
                scrollToSection("section2");
              }, 500);
            }
          }}
          initial={{ color: "grey" }}
          animate={
            selectedNavIndex === 1 ? { color: "#ff6600" } : { color: "#9babb8" }
          }
        >
          <Link to="/" className="link">
            Company
          </Link>
        </motion.p>
        <motion.p
          className="nav-item mx-20 grey small-text pointer"
          onClick={() => {
            if (document.getElementById("section3")) {
              scrollToSection("section3");
              setSelectedNavIndex(2);
            } else {
              setTimeout(() => {
                setSelectedNavIndex(2);
                scrollToSection("section3");
              }, 500);
            }
          }}
          initial={{ color: "grey" }}
          animate={
            selectedNavIndex === 2 ? { color: "#ff6600" } : { color: "#9babb8" }
          }
        >
          <Link to="/" className="link">
            About
          </Link>
        </motion.p>
        <motion.p
          className="nav-item mx-20 grey small-text pointer"
          onClick={() => {
            if (document.getElementById("section4")) {
              scrollToSection("section4");
              setSelectedNavIndex(3);
            } else {
              setTimeout(() => {
                setSelectedNavIndex(3);
                scrollToSection("section4");
              }, 500);
            }
          }}
          initial={{ color: "grey" }}
          animate={
            selectedNavIndex === 3 ? { color: "#ff6600" } : { color: "#9babb8" }
          }
        >
          <Link to="/" className="link">
            Faq
          </Link>
        </motion.p>
        <motion.p
          className="nav-item mx-20 grey small-text pointer"
          onClick={() => {
            if (document.getElementById("section5")) {
              scrollToSection("section5");
              setSelectedNavIndex(4);
            } else {
              setTimeout(() => {
                scrollToSection("section5");
                setSelectedNavIndex(4);
              }, 500);
            }
          }}
          initial={{ color: "grey" }}
          animate={
            selectedNavIndex === 4 ? { color: "#ff6600" } : { color: "#9babb8" }
          }
        >
          <Link to="/" className="link">
            Products
          </Link>
        </motion.p>

        <motion.p
          className="nav-item mx-20 grey small-text pointer"
          onClick={() => {
            if (document.getElementById("section6")) {
              scrollToSection("section6");
              setSelectedNavIndex(5);
            }
          }}
          initial={{ color: "#9babb8" }}
          animate={
            selectedNavIndex === 5 ? { color: "#ff6600" } : { color: "#9babb8" }
          }
        >
          Contact
        </motion.p>

        <div
          className="flex  relative mx-20 pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <motion.p
            className="nav-item grey small-text"
            onClick={() => setSelectedNavIndex(6)}
            initial={{ color: "grey" }}
            animate={
              selectedNavIndex === 6 ? { color: "#ff6600" } : { color: "grey" }
            }
          >
            <Link to="/products" className="link">
              Categories
            </Link>
          </motion.p>
          <motion.img
            alt=""
            src={arrowDown}
            className="mx-5"
            initial={{ rotate: "0" }}
            animate={{ rotate: isHovered ? "180deg" : "0" }}
          />
          <HoverComponent
            width="60vw"
            height="fit-content"
            isVisible={isHovered}
            content={
              <div
                className="px-20 py-20 w-full h-full grid box-sizing "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="category-item w-full flex align-items-center "
                  >
                    <img
                      alt={category.name}
                      src={category.image}
                      className=""
                    />
                    <p className="mx-20 grey small-text">{category.name}</p>
                  </div>
                ))}
              </div>
            }
          />
        </div>
      </div>

      <div
        className="action-button bg-orange"
        onClick={() => {
          if (document.getElementById("section6")) {
            scrollToSection("section6");
            setSelectedNavIndex(5);
          } else {
            setTimeout(() => {
              scrollToSection("section6");
              setSelectedNavIndex(5);
            }, 2500);
          }
        }}
      >
        <p className="btn">
          <Link to="/" className="link">
            Contact Us
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default App;
