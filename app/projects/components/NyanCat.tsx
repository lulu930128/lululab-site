"use client";
import React, { useState, useEffect } from "react";

export default function NyanCat() {
    const [pos, setPos] = useState(10);
    const [facingRight, setFacingRight] = useState(true);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPos((prev) => {
        const step = 0.4; 
        let nextPos = facingRight ? prev + step : prev - step;
        if (nextPos > 92) { setFacingRight(false); return 92; }
        else if (nextPos < -2) { setFacingRight(true); return -2; }
        return nextPos;
      });
    }, 40);
    return () => clearInterval(moveInterval);
  }, [facingRight]);

  return (
    <div
      className="absolute bottom-[-14px] z-0 pointer-events-none" // 這裡下調了位置
      style={{ 
        left: `${pos}%`, 
        transform: facingRight ? "scaleX(1)" : "scaleX(-1)", 
        width: "90px",
        transition: "left 0.04s linear" 
      }}
    >
      <img src="/images/Projects/nyan-cat.gif" alt="Nyan Cat" className="w-full h-auto opacity-80" />
    </div>
  );
}