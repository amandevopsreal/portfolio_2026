"use client"

import { useCallback, useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function StickyCursor({
  stickyElement,
}: {
  stickyElement: React.RefObject<HTMLElement | null>
}) {
  const [isHovered, setIsHovered] = useState(false)

  const cursorSize = isHovered ? 60 : 15

  const mouse = {
    x: useMotionValue(0),

    y: useMotionValue(0),
  }

  //Smooth out the mouse values

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),

    y: useSpring(mouse.y, smoothOptions),
  }

  const manageMouseMove = useCallback(
    (e: any) => {
      const { clientX, clientY } = e
      if (!stickyElement.current) return
      const { left, top, height, width } =
        stickyElement.current.getBoundingClientRect()
      //center position of the stickyElement
      const center = { x: left + width / 2, y: top + height / 2 }

      if (isHovered) {
        //distance between the mouse pointer and the center of the custom cursor and
        const distance = { x: clientX - center.x, y: clientY - center.y }
        //move mouse to center of stickyElement + slightly move it towards the mouse pointer
        mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1)
        mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1)
      } else {
        //move custom cursor to center of stickyElement
        mouse.x.set(clientX - cursorSize / 2)
        mouse.y.set(clientY - cursorSize / 2)
      }
    },
    [cursorSize, isHovered, mouse.x, mouse.y, stickyElement]
  )

  const manageMouseOver = () => {
    setIsHovered(true)
  }
  const manageMouseLeave = () => {
    setIsHovered(false)
  }

  useEffect(() => {
    let stickyElementVar = stickyElement.current
    if (!stickyElementVar) return
    stickyElementVar.addEventListener("mouseenter", manageMouseOver)
    stickyElementVar.addEventListener("mouseleave", manageMouseLeave)
    window.addEventListener("mousemove", manageMouseMove)

    return () => {
      if (!stickyElementVar) return
      stickyElementVar.removeEventListener("mouseenter", manageMouseOver)
      stickyElementVar.removeEventListener("mouseleave", manageMouseLeave)
      window.removeEventListener("mousemove", manageMouseMove)
    }
  }, [isHovered, manageMouseMove, stickyElement])

  return (
    <div>
      <motion.div
        style={{
          left: smoothMouse.x,

          top: smoothMouse.y,
        }}
        className="pointer-events-none fixed size-[15px] rounded-full bg-primary"
      ></motion.div>
    </div>
  )
}
