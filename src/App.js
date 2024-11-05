import "./App.css";
import "./styles/Home.css";

// img
import logo from "./assets/logo.png";
import back1 from "./assets/back1.png";
import img2 from "./assets/img2.png";
import sportLogo from "./assets/sportLogo.png";
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

import {motion, AnimatePresence} from "framer-motion";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <Section2/>
            <Section3/>
            <Footer/>
        </div>
    );
}

const Home = () => {
    return (
        <div className="section home px-80 box-sizing">
            <div
                className="w-full relative h-full border-radius-5 bg-grey box-sizing flex justify-space-between  px-80 ">
                <motion.div className="home-left flex-column justify-center relative">
                    <motion.div
                        initial={{left: "50%"}}
                        animate={{
                            left: 0,
                            transition: {delay: 2.1},
                        }}
                        className="relative small-hr bg-orange border-radius-5 my-10"
                    ></motion.div>
                    <motion.p
                        className="sec-text w-1-2 bold relative"
                        initial={{left: "50%"}}
                        animate={{
                            left: 0,
                            transition: {delay: 2.12},
                        }}
                    >
                        Company Name Is Now Open And Only For It Cause.
                    </motion.p>
                    <motion.p
                        className="w-1-2 my-20 relative"
                        initial={{left: "50%", opacity: 0}}
                        animate={{
                            left: 0,
                            opacity: 1,
                            transition: {delay: 2.14},
                        }}
                    >
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                        ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    </motion.p>

                    <motion.div
                        className="action-button bg-orange"
                        initial={{left: "50%", opacity: 0}}
                        animate={{
                            left: 0,
                            opacity: 1,
                            transition: {delay: 2.16},
                        }}
                    >
                        <p className="btn">Discover Now</p>
                    </motion.div>
                </motion.div>

                <div className="home-right relative">
                    <motion.div
                        className="back-circle relative"
                        initial={{scale: 11}}
                        animate={{
                            scale: 1,
                            transition: {delay: 2, duration: 0.3, ease: "circInOut"},
                        }}
                    >
                        <motion.img
                            initial={{left: "50%", opacity: 1}}
                            animate={{
                                left: 0,
                                opacity: 1,
                                transition: {delay: 2.2},
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
            <div
                className="flex relative align-items-center justify-center section2-left  h-full  border-radius-5 bg-grey">
                <img alt=" " src={img2}/>
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
                            <img alt="" src={sportLogo} className="logo-img"/>
                            <p className="bold my-10"> Company Name Is Now Open</p>
                            <p className="small-text">
                                {" "}
                                Company Name Is Now Open, Company Name Is Now Open Company Name
                                Is Now Open Company Name Is Now Open.
                            </p>
                        </div>

                        <div className="flex-column justify-space-between w-1-2   -20 py-20 border-radius-5">
                            <img alt="" src={sportLogo} className="logo-img"/>
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
            initial={{top: "-100px"}}
            animate={{
                top: 0,
                transition: {delay: 2.5, duration: 0.3, ease: "circInOut"},
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

const Footer = () => {
    return (
        <motion.div
            className="section footer w-full h-full flex column px-80 box-sizing">
            <div className="footer-top border-radius-5 bg-grey p-20 mb-4 flex align-items-center justify-space-between">
                <div className="footer-top-left w-25">
                    <h1 className="bold sec-text">Subscribe To Our Newsletter</h1>
                </div>
                <div className="footer-top-right w-25 flex align-items-center justify-end">
                    <div className="flex flex-col ">
                        <p>join our newsletter to get latest news , offers , and updates</p>
                        <div className="flex align-items-baseline justify-flex-start">
                            <input className="mt-4 w-90 border-radius-20" type="text" placeholder="enter your email"/>
                            <div className="action-button bg-orange  send-message-btn flex justify-center">
                                <p className="btn">
                                    <img src={message} alt="messager-icon" height="20"/>
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
                            <img className="contact-img mr-10" src={email} alt="email" height="37"/>
                            <div className="flex flex-column">
                                <span className="grey small-text">Email</span>
                                <span className="bold">contact@email.com</span>
                            </div>
                        </li>
                        <li className="flex align-items-center justify-flex-start">
                            <img className="contact-img mr-10" src={call} alt="email" height="37"/>
                            <div className="flex flex-column">
                                <span className="grey small-text">Phone</span>
                                <span className="bold">+213 123456789</span>
                            </div>
                        </li>
                        <li className="flex align-items-center justify-flex-start">
                            <img className="contact-img mr-10" src={location} alt="email" height="37"/>
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
                    <div className="border-radius-20 bg-grey p-2 flex align-items-center mr-10 pointer ">
                        <img src={facebook} alt="facebook-logo" className="mr-10" height="20"/>
                        <span className="small-text bold">Facebook</span>
                    </div>
                    <div className="border-radius-20 bg-grey p-2 flex align-items-center mr-10 pointer social-link">
                        <img src={instagram} alt="facebook-logo" className="mr-10" height="20"/>
                        <span className="small-text bold">Instagram</span>
                    </div>
                    <div className="border-radius-20 bg-grey p-2 flex align-items-center mr-10 pointer social-link">
                        <img src={x} alt="facebook-logo" className="mr-10" height="20"/>
                        <span className="small-text bold">Twitter</span>
                    </div>
                    <div className="border-radius-20 bg-grey p-2 flex align-items-center mr-10 pointer social-link">
                        <img src={youtube} alt="facebook-logo" className="mr-10" height="20"/>
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
                            <img src={up_cheveron} alt="up-cheveron" height="15"/>
                        </span>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}

export default App
