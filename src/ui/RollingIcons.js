"use client";
import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { GitHubLogo, TwitterLogo } from "yes@@/constants/icons";
import { actions } from "yes@@/constants/cmd";
import Link from "next/link";
import { cn } from "yes@@/utils/className";
import {
  HomeIcon,
  MoonIcon,
  PencilIcon,
  PlusIcon,
  ComputerDesktopIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

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
        className="h-12 w-12  select-none items-center justify-center rounded-full bg-black p-3 dark:bg-white"
        onClick={handleClick}
        whileTap={{ scale: 1.1 }}
      >
        <PlusIcon className="h-6 w-6 text-white dark:text-black " />
      </motion.button>
      <AnimatePresence>
        {expanded && (
          <motion.div className="flex space-x-2">
            {memoizedActions.map((action, i) => {
              return (
                <motion.div
                  animate="visible"
                  className="mx-0.5 "
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
                  <Compute
                    as={
                      action.section === "Navigation"
                        ? Link
                        : action.section === "Socials"
                        ? "a"
                        : "button"
                    }
                    className={cn(
                      "flex  cursor-pointer select-none flex-col items-center space-y-1 p-3 transition-all duration-200",
                      "rounded-full",
                      `bg-[${action.color}]`
                    )}
                    href={action?.href}
                    key={i}
                    onClick={
                      action.section === "Themes"
                        ? () => changeTheme(action.keywords)
                        : undefined
                    }
                    rel={
                      action.section === "Socials"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    tabIndex={0}
                    target={action.section === "Socials" ? "_blank" : undefined}
                  >
                    {action.keywords === "home" && (
                      <HomeIcon
                        className={`h-6 w-6 text-[${action.iconColor}]`}
                      />
                    )}
                    {action.keywords === "writing" && (
                      <PencilIcon
                        className={`h-6 w-6 text-[${action.iconColor}]`}
                      />
                    )}
                    {action.keywords === "github" && (
                      <GitHubLogo
                        className={`h-6 w-6 text-[${action.iconColor}]`}
                      />
                    )}
                    {action.keywords === "twitter" && (
                      <TwitterLogo
                        className={`h-6 w-6 text-[${action.iconColor}]`}
                      />
                    )}
                    {action.keywords === "light" && (
                      <SunIcon
                        className={`h-6 w-6 text-[${action.iconColor}]`}
                      />
                    )}
                    {action.keywords === "dark" && (
                      <MoonIcon
                        className={`h-6 w-6 text-[${action.iconColor}]`}
                      />
                    )}
                    {action.keywords === "system" && (
                      <ComputerDesktopIcon
                        className={`h-6 w-6 text-[${action.iconColor}]`}
                      />
                    )}
                  </Compute>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function Compute({ as, children, ...props }) {
  const Component = as;
  return <Component {...props}>{children}</Component>;
}

export default RollingIcons;
