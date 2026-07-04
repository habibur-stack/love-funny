export default function FloatingHearts() {
  const hearts = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {hearts.map((_, index) => {
        const size = Math.random() * 25 + 15;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 5 + 6;

        return (
          <span
            key={index}
            className="heart"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          >
            ❤️
          </span>
        );
      })}
    </div>
  );
}