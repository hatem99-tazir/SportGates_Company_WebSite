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

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

const Home = () => {
  return (
    <div id="home" className="section home px-80 box-sizing">
      <div className="w-full relative h-full border-radius-5 bg-grey box-sizing flex justify-space-between  px-80 ">
        <motion.div className="home-left flex-column justify-center relative">
          <motion.div
            initial={{ left: "50%" }}
            animate={{
              left: 0,
              transition: { delay: 2.1 },
            }}
            className="relative small-hr bg-orange border-radius-5 my-10"
          ></motion.div>
          <motion.p
            className="sec-text w-1-2 bold relative"
            initial={{ left: "50%" }}
            animate={{
              left: 0,
              transition: { delay: 2.12 },
            }}
          >
            Company Name Is Now Open And Only For It Cause.
          </motion.p>
          <motion.p
            className="w-1-2 my-20 relative"
            initial={{ left: "50%", opacity: 0 }}
            animate={{
              left: 0,
              opacity: 1,
              transition: { delay: 2.14 },
            }}
          >
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </motion.p>

          <motion.div
            className="action-button bg-orange"
            initial={{ left: "50%", opacity: 0 }}
            animate={{
              left: 0,
              opacity: 1,
              transition: { delay: 2.16 },
            }}
          >
            <p className="btn">Discover Now</p>
          </motion.div>
        </motion.div>

        <div className="home-right relative">
          <motion.div
            className="back-circle relative"
            initial={{ scale: 11 }}
            animate={{
              scale: 1,
              transition: { delay: 2, duration: 0.3, ease: "circInOut" },
            }}
          >
            <motion.img
              initial={{ left: "50%", opacity: 1 }}
              animate={{
                left: 0,
                opacity: 1,
                transition: { delay: 2.2 },
              }}
              src={back1}
              alt="back"
              className="back-img"
            />
            <div className="card-bubble"></div>

            <div className="card-bubble card-bubble2"></div>
          </motion.div>
        </div>
      </div>
    </div>
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
          Company Name Is Now And Only For It Cause.Company Name Is Now
          Open And Only For It Cause, Company Name Is Now Open And Only For It
          Cause, Co.
        </p>
        <div className="my-20">
          <p className="bold">Company Policy</p>
          <p className="small-text">
            Company Name Is Now Open And Only For It Cause.Company Name Is Now
            Open And Only For It Cause, Company Name Is Now Open And Only For It
            Cause, Company Name Is Now  It Cause.
          </p>
        </div>

        <div className="">
          <p className="bold">Company Policy</p>
          <p className="small-text">
            Company Name Is Now Open And Only For It Cause.Company Name Is Now
            Open And Only For It Cause, Company Name Is  Open And Only For It
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
    <div id="section5" className="section5 section flex-column  align-items-center justify-space-between w-full h-full px-80 box-sizing">
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

const Header = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const [selectedNavIndex, setSelectedNavIndex] = useState(0);
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
            scrollToSection("home");
            setSelectedNavIndex(0);
          }}
          initial={{ color: "#ff6600" }}
          animate={
            selectedNavIndex === 0 ? { color: "#ff6600" } : { color: "#9babb8" }
          }
        >
          Home
        </motion.p>
        <motion.p
          className="nav-item mx-20 grey small-text pointer"
          onClick={() => {
            scrollToSection("section2");
            setSelectedNavIndex(1);
          }}
          initial={{ color: "grey" }}
          animate={
            selectedNavIndex === 1 ? { color: "#ff6600" } : { color: "#9babb8" }
          }
        >
          Company
        </motion.p>
        <motion.p
          className="nav-item mx-20 grey small-text pointer"
          onClick={() => {
            scrollToSection("section3");
            setSelectedNavIndex(2);
          }}
          initial={{ color: "grey" }}
          animate={
            selectedNavIndex === 2 ? { color: "#ff6600" } : { color: "#9babb8" }
          }
        >
          About
        </motion.p>
        <motion.p
          className="nav-item mx-20 grey small-text pointer"
          onClick={() => {
            scrollToSection("section4");
            setSelectedNavIndex(3);
          }}
          initial={{ color: "grey" }}
          animate={
            selectedNavIndex === 3 ? { color: "#ff6600" } : { color: "#9babb8" }
          }
        >
          Faq
        </motion.p>
        <motion.p
          className="nav-item mx-20 grey small-text pointer"
          onClick={() => {
            scrollToSection("section5");
            setSelectedNavIndex(4);
          }}
          initial={{ color: "grey" }}
          animate={
            selectedNavIndex === 4 ? { color: "#ff6600" } : { color: "#9babb8" }
          }
        >
          Contact
        </motion.p>
      </div>

      <div className="action-button bg-orange">
        <p className="btn">Contact Us</p>
      </div>
    </motion.div>
  );
};

export default App;
