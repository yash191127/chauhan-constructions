import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import "./Stack.css";

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({ cards = [], sensitivity = 200 }) {
  const [stack, setStack] = useState(cards);

  useEffect(() => {
    setStack(cards);
  }, [cards]);

  const sendToBack = (index) => {
    setStack((prev) => {
      const newStack = [...prev];
      const [item] = newStack.splice(index, 1);
      newStack.unshift(item);
      return newStack;
    });
  };

  return (
    <div className="stack-container">
      {stack.map((card, index) => (
        <CardRotate
          key={index}
          onSendToBack={() => sendToBack(index)}
          sensitivity={sensitivity}
        >
          <motion.div
            className="card"
            animate={{
              rotateZ: (stack.length - index - 1) * 4,
              scale: 1 + index * 0.05 - stack.length * 0.05,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {card}
          </motion.div>
        </CardRotate>
      ))}
    </div>
  );
}