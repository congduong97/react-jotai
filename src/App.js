import logo from "./logo.svg";
import "./App.css";
import { useTimer } from "./store";

function App() {
  const { startTimer, stopTimer, resetTimer, count } = useTimer();

  const formatNumber = (num) => {
    if (num > 9) {
      return num;
    }
    return `0${num}`;
  };

  return (
    <div className="w-full h-[100vh] bg-black flex flex-col items-center justify-center bg-black-primary ">
      <div className="bg-ebony rounded-md w-fit p-4 flex flex-col gap-y-[14px] items-center justify-center shadow-md">
        <h1 className="text-white font-semibold text-xl">Timer App</h1>
        <p className="text-silver text-base">00:00:{formatNumber(count)}</p>
        <div className="flex flex-row item-center gap-3">
          <button
            className="font-semibold text-sm bg-ebony-600 rounded-md p-2 text-gray shadow-md hover:bg-silver"
            onClick={startTimer}
          >
            Start
          </button>
          <button
            className="font-semibold text-sm bg-ebony-600 rounded-md p-2 text-gray shadow-md hover:bg-silver"
            onClick={stopTimer}
          >
            Stop
          </button>
          <button
            className="font-semibold text-sm bg-ebony-600 rounded-md p-2 text-gray shadow-md hover:bg-silver"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
