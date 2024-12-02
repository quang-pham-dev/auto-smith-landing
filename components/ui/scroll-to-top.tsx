"use client";

import React from "react";
import { MoveUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import useScroll from "@/hooks/use-scroll";
import { scrollToSection } from "@/lib/utils";

export function ScrollToTopButton() {
  const { y: scrollY } = useScroll();

  return (
    <AnimatePresence>
      {scrollY > 800 && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          onTap={() => scrollToSection()}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            padding: "0.5rem",
            borderRadius: "9999px",
            backgroundColor: "#FC5316",
            color: "white",
            boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
            cursor: "pointer",
          }}
          aria-label="Scroll to Top"
        >
          <MoveUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
