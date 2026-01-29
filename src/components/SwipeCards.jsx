import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const cardData = [
  { id: 1, url: "/images/weather image.webp" },
  { id: 4, url: "/images/to do list image.webp" },
];

const SwipeCards = () => {
  const [cards, setCards] = useState(cardData);

  return (
    <div className="relative h-[420px] w-full flex justify-center items-center">
      {cards.map((card) => (
        <Card key={card.id} {...card} cards={cards} setCards={setCards} />
      ))}
    </div>
  );
};

const Card = ({ id, url, setCards, cards }) => {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

const handleDragEnd = () => {
  if (Math.abs(x.get()) > 100) {
    setCards((prev) => {
      const swipedCard = prev.find((c) => c.id === id);
      const remaining = prev.filter((c) => c.id !== id);
      return [swipedCard, ...remaining]; // card goes to back
    });
    x.set(0); // reset position
  }
};

  return (
    <motion.img
      src={url}
      alt="Project preview"
      className="absolute h-80 w-64 rounded-xl object-cover shadow-xl"
      style={{ x, opacity, rotate }}
      animate={{ scale: isFront ? 1 : 0.95 }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
    />
  );
};

export default SwipeCards;
