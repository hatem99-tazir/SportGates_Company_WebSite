import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import "./styles/products.css";
import logo from "./assets/logo.png";
import prod2 from "./assets/prod2.png";

const array = new Array(12).fill(undefined); // Create an array with 12 undefined values

function Products() {
    const [inViewport, setInViewport] = useState(Array(array.length).fill(false)); // Track which cards are in viewport
    const cardRefs = useRef([]); // Hold references to all product cards

    useEffect(() => {
        const options = {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin around the root
            threshold: 0.1 // When 10% of the card is visible, trigger the callback
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const index = cardRefs.current.indexOf(entry.target);
                if (index !== -1) {
                    setInViewport((prev) => {
                        const newViewportState = [...prev];
                        newViewportState[index] = entry.isIntersecting;
                        return newViewportState;
                    });
                }
            });
        }, options);

        // Observe all the product cards
        cardRefs.current.forEach((card) => observer.observe(card));

        return () => {
            // Cleanup observer on component unmount
            observer.disconnect();
        };
    }, []);

    return (
        <motion.div className="section home px-80 box-sizing">
            <div className="flex w-full">
                <div className="w-25 p-20">
                    <p>filters</p>
                </div>

                <div className="w-75">
                    <div className="flex align-items-center justify-space-between box-sizing flex-wrap">
                        {array.map((item, index) => (
                            <motion.div
                                key={index}
                                ref={(el) => (cardRefs.current[index] = el)} // Set ref for each card
                                className="product-card bg-grey flex flex-column"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: inViewport[index] ? 1 : 0, // Fade in when in viewport
                                    scale: inViewport[index] ? 1 : 0.8, // Scale up when in viewport
                                }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="product-card-header flex align-items-center justify-flex-start">
                                    <img src={logo} alt="logo" height="15" />
                                </div>

                                <motion.div
                                    className="product-card-details flex flex-column align-items-center justify-center box-sizing"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <img src={prod2} alt="prod-2" height="200" />
                                    <span className="bold small-text">Whey Max - Whey Prod</span>
                                </motion.div>

                                <div className="product-card-footer flex align-items-center justify-space-between mt-4">
                                    <motion.div
                                        className="action-button bg-orange"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        whileTap={{ scale: 1 }}
                                    >
                                        <p className="btn">View Product</p>
                                    </motion.div>
                                    <span className="bold grey">25,000 DA</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Products;
