import "./App.css";
import "./styles/Home.css";

// img
import logo from "./assets/logo.png";
import back1 from "./assets/back1.png";
import img2 from "./assets/img2.png";
import sportLogo from "./assets/sportLogo.png";

import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Section2 />
      <Section3 />
    </div>
  );
}

const Home = () => {
  return (
    <div className="section home px-80 box-sizing">
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
    <div className="section section2 w-full h-full flex justify-space-between px-80 box-sizing">
      <div className="flex relative align-items-center justify-center section2-left  h-full  border-radius-5 bg-grey">
        <img alt=" " src={img2} />
      </div>
      <div className="flex section2-right flex-column justify-center">
        <p className="sec-text bold ">
          Company Name Is Now Open And Only For It Cause.
        </p>
        <p className="">
          Company Name Is Now Open And Only For It Cause.Company Name Is Now
          Open And Only For It Cause, Company Name Is Now Open And Only For It
          Cause, Company Name Is Now Open And Only For It Cause.
        </p>
        <div className="my-20">
          <p className="bold">Company Policy</p>
          <p className="">
            Company Name Is Now Open And Only For It Cause.Company Name Is Now
            Open And Only For It Cause, Company Name Is Now Open And Only For It
            Cause, Company Name Is Now Open And Only For It Cause.
          </p>
        </div>

        <div className="">
          <p className="bold">Company Policy</p>
          <p className="">
            Company Name Is Now Open And Only For It Cause.Company Name Is Now
            Open And Only For It Cause, Company Name Is Now Open And Only For It
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
    <div className="section section3  w-full h-full flex-column justify-space-between px-80 box-sizing ">
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

const Header = () => {
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
        <p className="nav-item mx-20 orange small-text pointer">Home</p>
        <p className="nav-item mx-20 grey small-text pointer">Company</p>
        <p className="nav-item mx-20 grey small-text pointer">About</p>
        <p className="nav-item mx-20 grey small-text pointer">Contact</p>
      </div>

      <div className="action-button bg-orange">
        <p className="btn">Contact Us</p>
      </div>
    </motion.div>
  );
};

export default App;
