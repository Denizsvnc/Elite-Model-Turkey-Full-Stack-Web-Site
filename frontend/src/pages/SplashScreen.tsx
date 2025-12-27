"use client";

import { motion, AnimatePresence } from "framer-motion";
import logo from "../../images/Logo/elitmodel_logo.png";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden"
          initial={{ x: 0 }}
          exit={{
            x: "-110%",
            transition: {
              duration: 1.2,
              ease: [0.77, 0, 0.18, 1], // premium easing
            },
          }}
        >
          {/* Background motion layer */}
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, filter: "blur(12px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10"
          >
            <img
              src={logo}
              alt="Logo"
              className="block mx-auto w-[80%] h-auto object-contain md:w-[280px] lg:w-[340px]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
