import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Loader = ({ isLoading, setIsLoading }: any) => {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <title>Logo</title>
            <g>
              <text
                x="50"
                y="55"
                fontFamily="Arial, sans-serif"
                fontSize="18"
                fontWeight="bold"
                textAnchor="middle"
                fill="currentColor"
              >
                SS
              </text>
              <motion.path
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                exit={{ scale: 2 }}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
