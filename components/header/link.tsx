"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ClassNameValue } from "tailwind-merge"

import { cn } from "@/lib/utils"

interface Props {
  label: string
  href: string
}

const titleAnimationVariant = {
  rest: {
    transition: {
      staggerChildren: 0.01,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.02,
    },
  },
}

const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -30,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
}

const letterAnimationTwo = {
  rest: {
    y: 30,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
}

export const NavLink: React.FC<Props> = ({ label, href }) => {
  const [animate, setAnimate] = useState<"rest" | "hover">("rest")

  return (
    <Link
      href={href}
      className="relative bottom-0 flex w-fit items-center justify-center rounded-lg p-0 text-base text-primary/90 transition sm:px-2 sm:py-1"
    >
      <motion.div
        initial="rest"
        animate={animate}
        variants={{
          rest: {
            width: "0%",
            transition: {
              originX: "50%",
              originY: "50%",
            },
          },
          hover: {
            width: "100%",
          },
        }}
        className="absolute bottom-0 h-px rounded-lg bg-accent"
      />
      <motion.div
        initial="rest"
        animate={animate}
        className="relative cursor-pointer overflow-hidden"
        onMouseEnter={() => setAnimate("hover")}
        onMouseLeave={() => setAnimate("rest")}
      >
        <AnimatedWord
          label={label}
          animationVariant={letterAnimation}
          animteValue={animate}
        />
        <div className="absolute top-0">
          <AnimatedWord
            label={label}
            animationVariant={letterAnimationTwo}
            animteValue={animate}
          />
        </div>
      </motion.div>
    </Link>
  )
}

const AnimatedWord = ({
  label,
  className,
  animationVariant,
  animteValue,
}: {
  label: string
  className?: ClassNameValue
  animationVariant: any
  animteValue: "rest" | "hover"
}) => {
  return (
    <motion.span
      initial="rest"
      animate={animteValue}
      variants={titleAnimationVariant}
      className={cn("relative whitespace-nowrap", className)}
    >
      {label.split("").map((ch, i) => {
        if (ch === " ") return <span key={i}>&nbsp;</span>
        return (
          <motion.span
            variants={animationVariant}
            key={i}
            className="relative inline-block whitespace-nowrap"
          >
            {ch}
          </motion.span>
        )
      })}
    </motion.span>
  )
}
