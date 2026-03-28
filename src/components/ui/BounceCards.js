import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./BounceCards.css";

export default function BounceCards({
  images = [],
  containerWidth = 500,
  containerHeight = 300,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [],
  enableHover = true,
  onCardClick,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".card",
        { scale: 0 },
        {
          scale: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [animationStagger, easeType, animationDelay]);

  return (
    <div
      ref={containerRef}
      className="bounceCardsContainer"
      style={{ width: containerWidth, height: containerHeight }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`card`}
          style={{ transform: transformStyles[idx] || "none" }}
          onClick={() => onCardClick(idx)}
        >
          <img src={src} className="image" alt="" />
        </div>
      ))}
    </div>
  );
}