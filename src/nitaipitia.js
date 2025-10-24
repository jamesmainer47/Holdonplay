// components/AnimatedBoxes.jsx
'use client' // (if using Next 13+/App Router)

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AnimatedBoxes() {
  const boxRef = useRef(null);
  const squareRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // Animate via class selector (if needed)
    gsap.to(".box", { x: 200, duration: 1 });

    // Animate via direct reference
    gsap.to(boxRef.current, { y: 100, duration: 1 });

    // Animate multiple refs
    gsap.to([squareRef.current, circleRef.current], { x: 150, duration: 1 });
  }, []);

  return (
    <section>
      <div className="box" ref={boxRef}>Box</div>
      <div className="square" ref={squareRef}>Square</div>
      <div className="circle" ref={circleRef}>Circle</div>

      <style jsx>{`
        .box, .square, .circle {
          width: 100px;
          height: 100px;
          background: #0070f3;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 10px;
        }

        .square {
          background: #e91e63;
        }

        .circle {
          background: #4caf50;
          border-radius: 50%;
        }
      `}</style>
    </section>
  );
}
