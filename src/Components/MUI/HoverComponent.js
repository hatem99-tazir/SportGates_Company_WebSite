import React from "react";
import { delay, motion } from "framer-motion";
import PropTypes from "prop-types";

const HoverComponent = ({ width, height, isVisible, content, className }) => {
  return (
    <motion.div
      className={`absolute hover-component ${className}`}
      style={{
        width,
        height,
        position: "absolute",
        right: "10px", // Position to the right of the parent
        transformOrigin: "top",
      }}
      initial={{ scaleY: 0 }}
      animate={{
        scaleY: isVisible ? 1 : 0,
        transformOrigin: "top",
        transition: { delay: 0.2 },
      }}
      exit={{ scaleY: 0 , transition:{delay:2}}}
    >
      <motion.div
      className="w-full h-full"
        initial={{ opacity: 1 }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        exit={{ opacity: 1}}
      >
        {content}
      </motion.div>
    </motion.div>
  );
};

HoverComponent.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  content: PropTypes.node,
  className: PropTypes.string,
};

export default HoverComponent;
