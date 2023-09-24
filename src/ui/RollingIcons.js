"use client";
import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { GitHubLogo, TwitterLogo } from "yes@@/constants/icons";
import { actions } from "yes@@/constants/cmd";

const RollingIcons = () => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef();
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setExpanded(!expanded);
  };
  const changeTheme = () => {
    if (theme === "system" || theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  const memoizedActions = actions.filter((action) => {
    if (action.section === "Themes") {
      return action.keywords !== theme;
    }
    return true;
  });

  const itemVariants = {
    hidden: { opacity: 0, rotate: -360, scale: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        bounce: 0.5,
        damping: 10,
        delay: i * 0.05,
        type: "spring",
      },
      x: 0,
    }),
  };

  // for listening outside events

  useEffect(() => {
    if (!expanded) return;

    const handleOutsideClick = (e) => {
      const target = e.target;
      if (ref.current?.contains(target)) return;

      setExpanded(false);
    };

    const scrolled = () => {
      setExpanded(false);
    };

    window.addEventListener("click", handleOutsideClick, { passive: true });
    window.addEventListener("scroll", scrolled, { passive: true });

    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", scrolled);
    };
  }, [expanded]);

  return (
    <div className="flex items-center" ref={ref}>
      <motion.button
        animate={{ rotate: expanded ? 45 : 0 }}
        aria-label="Navigation menu"
        className="h-10 w-10 select-none items-center justify-center rounded-full bg-black p-3 dark:bg-white"
        onClick={handleClick}
        whileTap={{ scale: 1.1 }}
      >
        ➕{/* <GitHubLogo className="h-6 w-6 text-white dark:text-black" /> */}
      </motion.button>
      <AnimatePresence>
        {expanded && (
          <motion.div className="flex space-x-2">
            {memoizedActions.map((action, i) => {
              return (
                <motion.div
                  animate="visible"
                  className="mx-0.5"
                  custom={i}
                  exit="hidden"
                  initial="hidden"
                  key={i}
                  style={{
                    WebkitTapHighlightColor: "transparent",
                  }}
                  tabIndex={-1}
                  transition={{ bounce: 0.5, damping: 10, type: "spring" }}
                  variants={itemVariants}
                  whileTap={{
                    scale: 1.1,
                    transition: {
                      duration: 0.4,
                      ease: [0.25, 1, 0.5, 1],
                      type: "tween",
                    },
                  }}
                >
                  {action.keywords === "home" && (
                    <GitHubLogo
                      className={`h-6 w-6 text-[${action.iconColor}]`}
                    />
                  )}
                  {action.keywords === "github" && (
                    <GitHubLogo
                      className={`h-6 w-6 text-[${action.iconColor}]`}
                    />
                  )}
                  {action.keywords === "writing" && (
                    <GitHubLogo
                      className={`h-6 w-6 text-[${action.iconColor}]`}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RollingIcons;
