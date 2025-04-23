"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export function useAnimation(threshold = 0.1, triggerOnce = true) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  })

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [inView, hasAnimated])

  return { ref, inView, hasAnimated }
}
