"use client";
import lottie from "lottie-web";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SignalLottie() {
  const animationContainer = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  
  // State to control the visibility of the animation
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Check if the user is scrolling
      if (scrollYProgress.get() > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Load the animation
    const animation = lottie.loadAnimation({
      container: animationContainer.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://lottie.host/8352a6c1-ab1e-4289-8f25-176c7ce24958/kDfklR0wGn.json",
    });

    animation.setSubframe(true);
    animation.setSpeed(0.5);

    return () => {
      animation.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollYProgress]);

  return (
    <motion.div 
      ref={animationContainer} 
      style={{ scale}} 
    />
  );
}
