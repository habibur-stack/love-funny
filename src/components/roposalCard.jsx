import { useState } from "react";
import FloatingHearts from "./FloatingHearts";

export default function ProposalCard() {
  const [step, setStep] = useState(0);
  const [accepted, setAccepted] = useState(false);

  const [noPos, setNoPos] = useState({
    x: window.innerWidth / 2 + 120,
    y: window.innerHeight / 2 + 60,
  });

  const messages = [
    {
      title: "Hi 😊",
      text: "কেমন আছো?",
      button: "ভালো আছি ❤️",
    },
    {
      title: "😊",
      text: "ভালো আছো জেনে অনেক ভালো লাগলো।",
      button: "তারপর? 👉",
    },
    {
      title: "🙈",
      text: "তোমাকে একটা কথা বলার ছিল...",
      button: "বলো 😊",
    },
    {
      title: "😳",
      text: "আসলে... একটু লজ্জা লাগছে...",
      button: "আরে বলো না 🥺",
    },
    {
      title: "❤️",
      text: "অনেক দিন ধরেই বলতে চাচ্ছিলাম...",
      button: "তারপর? 👀",
    },
    {
      title: "🥹",
      text: "কারণ... তোমাকে আমার অনেক ভালো লাগে।",
      button: "আর? ❤️",
    },
  ];

  const nextStep = () => {
    if (step < messages.length) {
      setStep(step + 1);
    }
  };

  const moveNoButton = () => {
    const buttonWidth = 130;
    const buttonHeight = 55;

    const x = Math.random() * (window.innerWidth - buttonWidth);
    const y = Math.random() * (window.innerHeight - buttonHeight);

    setNoPos({ x, y });
  };

  // ================= SUCCESS PAGE =================

  if (accepted) {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-200 via-pink-100 to-red-100 px-4 py-8">

        {/* Floating Hearts */}
        <FloatingHearts />

        <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 text-center animate-card">

          <img
            src="/cppl.jpeg"
            alt="Love"
            className="w-56 h-56 sm:w-72 sm:h-72 object-cover rounded-3xl mx-auto border-4 border-pink-300 shadow-2xl animate-photo"
          />

          <h1 className="text-4xl sm:text-5xl mt-6">
            🥳❤️
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mt-4">
            Yayyyyy!! ❤️
          </h2>

          <p className="mt-5 text-base sm:text-lg text-gray-700 leading-7">
            I knew it! 💖
            <br />
            You just made me the happiest person.
            <br />
            I Love You So Much ❤️🥹
          </p>

          <div className="mt-8 text-3xl sm:text-4xl animate-pulse">
            ❤️ 💖 💕 💘 💞 💝 ❤️
          </div>
        </div>
      </div>
    );
  }

  // ================= PROPOSAL PAGE =================

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-200 via-pink-100 to-purple-200 px-5 py-10">

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-10 text-center">

        {step < messages.length ? (
          <>
            <h1 className="text-5xl sm:text-6xl mb-6">
              {messages[step].title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 leading-8 mb-8">
              {messages[step].text}
            </p>

            <button
              onClick={nextStep}
              className="bg-pink-500 hover:bg-pink-600 active:scale-95 transition-all duration-300 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
            >
              {messages[step].button}
            </button>
          </>
        ) : (
          <>
            <h1 className="text-5xl mb-5">
              💖
            </h1>

            <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 leading-snug">
              Jerin,
              <br />
              Tumi Ki Amar Bou Hobe? 🥹❤️
            </h2>

            <p className="mt-5 text-gray-600 text-base sm:text-lg">
              I really like you...
              <br />
              Will you stay with me forever? ❤️
            </p>

            <div className="flex justify-center mt-10">

              <button
                onClick={() => setAccepted(true)}
                className="bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-300 text-white px-7 sm:px-9 py-3 rounded-full text-base sm:text-lg font-semibold shadow-xl"
              >
                Yes, I Love You ❤️
              </button>

            </div>

            <button
              onMouseEnter={moveNoButton}
              onMouseMove={moveNoButton}
              onClick={(e) => {
                e.preventDefault();
                moveNoButton();
              }}
              style={{
                position: "fixed",
                left: noPos.x,
                top: noPos.y,
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full shadow-xl transition-all duration-75 select-none"
            >
              No 😒
            </button>
          </>
        )}

      </div>
    </div>
  );
}