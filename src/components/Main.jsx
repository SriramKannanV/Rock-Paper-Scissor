import { useState } from "react";
import { sign } from "./random.js";
import confetti from "canvas-confetti";

const Main = () => {
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [streak, setStreak] = useState(0);
  const phone = import.meta.env.WHATSAPP_NUMBER;
  const message =
    "Hi! I just played your Rock Paper Scissors game and wanted to connect.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  const handlePick = (data) => {
    setResult(null);
    setComputerChoice(null);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * sign.length);
      const randomObject = sign[randomIndex];
      setComputerChoice(randomObject);

      if (randomObject.id == data.id) {
        setResult("DRAW");
        setStreak(streak);
      } else if (data.id == 0) {
        if (randomObject.id == 1) {
          setResult("LOSE");
          setStreak(0);
        } else {
          setResult("WIN");
          setStreak((prev) => prev + 1);
          confetti({
            particleCount: 150,
            spread: 180,
            origin: { y: 1 },
            colors: ["#10B981", "#F59E0B", "#ffffff"],
          });
        }
      } else if (data.id == 1) {
        if (randomObject.id == 0) {
          setResult("WIN");
          setStreak((prev) => prev + 1);
          confetti({
            particleCount: 150,
            spread: 180,
            origin: { y: 1 },
            colors: ["#10B981", "#F59E0B", "#ffffff"],
          });
        } else {
          setResult("LOSE");
          setStreak(0);
        }
      } else if (data.id == 2) {
        if (randomObject.id == 0) {
          setResult("LOSE");
          setStreak(0);
        } else {
          setResult("WIN");
          setStreak((prev) => prev + 1);
          confetti({
            particleCount: 150,
            spread: 180,
            origin: { y: 1 },
            colors: ["#10B981", "#F59E0B", "#ffffff"],
          });
        }
      }
    }, 1000);
  };

  const resultStyle = (result) => {
    if (result == "WIN") return "bg-[#10B98150] text-white shadow-[#10B981]";
    if (result == "LOSE") return "bg-red-500/50 text-white shadow-red-500";
    if (result == "DRAW") return "bg-gray-500/50 text-white shadow-gray-500";
  };

  return (
    <div className="container lg:px-20 px-4 w-full text-white">
      <nav className="h-20 flex justify-end items-center-safe">
        <button className="flex gap-2 items-center border-2 py-2 px-5 h-fit rounded-md cursor-pointer transition-all duration-200 ease-in-out hover:bg-white hover:text-mybg">
          <a
            className="underline"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>{" "}
          <i class="fa-brands fa-whatsapp text-2xl"></i>
        </button>
      </nav>

      <section>
        <h1 className="text-center font-myheading text-6xl lg:my-16 my-8">
          Rock Paper Scissor
        </h1>

        <section className="lg:flex">
          <section className="lg:w-1/2 lg:border-r-2 lg:border-dashed">
            <h3 className="text-center text-3xl font-semibold mb-2">You</h3>
            <p className="bg-myprimary w-fit py-1 px-6 rounded-full font-medium mx-auto">
              Win Streak - {streak}
            </p>

            <section className="flex mt-20 lg:gap-10 gap-4 justify-center mb-16 lg:mb-0">
              {sign.map((data) => {
                return (
                  <section
                    key={data.id}
                    onClick={() => handlePick(data)}
                    className="text-myaccent border-3 border-myaccent py-3 w-40 rounded-2xl text-center hover:text-white hover:bg-myaccent hover:shadow-lg hover:scale-115 hover:shadow-myaccent transition-all duration-200 ease-in-out cursor-pointer"
                  >
                    <i className={data.icon}></i>
                    <h6 className="font-myheading text-xl">{data.name}</h6>
                  </section>
                );
              })}
            </section>
          </section>

          <section className="lg:w-1/2">
            <h3 className="text-center text-3xl font-semibold mb-2">
              Computer
            </h3>
            {computerChoice && (
              <section className="text-white bg-myaccent py-3 w-40 rounded-2xl text-center lg:mt-30 mt-8 mx-auto">
                <i className={computerChoice.icon}></i>
                <h6 className="font-myheading text-xl">
                  {computerChoice.name}
                </h6>
              </section>
            )}
          </section>
        </section>
      </section>

      {result && (
        <section
          className={`${resultStyle(result)} ${result == "LOSE" ? "animate-shake" : ""} h-40 lg:w-1/2 w-80% m-auto mt-20 flex items-center justify-center rounded-full shadow-2xl`}
        >
          <h1 className="font-myheading lg:text-8xl text-7xl">{result}</h1>
        </section>
      )}

      <section className="my-20 text-center">
        <button
          onClick={() => {
            setStreak(0);
            setResult(null);
            setComputerChoice(null);
          }}
          className="py-2 px-5 h-fit rounded-md cursor-pointer bg-myprimary text-mybg font-semibold text-lg transition-all duration-200 ease-in-out hover:shadow-lg hover:scale-115 hover:shadow-sky-200"
        >
          Clear Streak
        </button>
      </section>

      <footer className="mb-4">
        <p className="text-center text-sm text-slate-300">
          © copyrights by Sriram Kannan V | 2026
        </p>
      </footer>
    </div>
  );
};

export default Main;
