export default function FloatingHearts() {
  const emojis = [
    "❤️",
    "💖",
    "💕",
    "💘",
    "💝",
    "💞",
    "💓",
    "🥰",
    "😍",
    "🌹",
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
      {Array.from({ length: 50 }).map((_, index) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = Math.random() * 6 + 6;
        const size = Math.random() * 20 + 20;
        const drift = Math.random() * 80 - 40;

        return (
          <span
            key={index}
            className="heart"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              "--drift": `${drift}px`,
            }}
          >
            {emojis[Math.floor(Math.random() * emojis.length)]}
          </span>
        );
      })}
    </div>
  );
}