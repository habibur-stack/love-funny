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
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);

    setNoPos({ x, y });
  };

  if (accepted) {
    return (
      <div className="relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-200 via-pink-100 to-red-100">

        <FloatingHearts />

        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center max-w-md z-10">

          <img
            src="/cppl.jpeg"
            alt=""
            className="w-64 h-64 object-cover rounded-3xl mx-auto shadow-xl border-4 border-pink-300"
          />

          <h1 className="text-5xl mt-6">
            🥳❤️
          </h1>

          <h2 className="text-3xl font-bold text-pink-600 mt-3">
            Yayyyyy!!
          </h2>

          <p className="mt-5 text-lg text-gray-700">
            I knew it! 💖
            <br />
            You just made me the happiest person. ❤️
          </p>

          <div className="flex justify-center gap-3 text-4xl mt-8 animate-pulse">
            ❤️ 💖 💕 💘 💞
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-screen items-center justify-center bg-gradient-to-br from-pink-200 via-pink-100 to-purple-200 overflow-hidden">

      <div className="bg-white w-[90%] max-w-lg rounded-3xl shadow-2xl p-10 text-center">

        {step < messages.length ? (
          <>
            <h1 className="text-5xl mb-6">
              {messages[step].title}
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-8">
              {messages[step].text}
            </p>

            <button
              onClick={nextStep}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg transition"
            >
              {messages[step].button}
            </button>
          </>
        ) : (
          <>
            <h1 className="text-5xl mb-5">💖</h1>

            <h2 className="text-3xl font-bold text-pink-600">
              Jerin, Tumi Ki Amar Bou Hobe?
            </h2>

            <p className="mt-5 text-gray-600">
              I really like you... 🥹❤️
            </p>

            <div className="flex justify-center gap-6 mt-10">

              <button
                onClick={() => setAccepted(true)}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg"
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
              className="bg-red-500 text-white px-8 py-3 rounded-full transition-all duration-75"
            >
              No 😒
            </button>

          </>
        )}

      </div>

    </div>
  );
}