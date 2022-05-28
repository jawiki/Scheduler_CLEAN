import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(Mode, replace = false) {
    setMode(Mode);
    if (replace) {
      setHistory((prev) => [prev[0]]);
    }
    setHistory((prev) => [...prev, Mode]);
  }

  function back() {
    let historyCopy = [...history];
    historyCopy.pop();
    if (historyCopy.length) {
      const prevMode = historyCopy[historyCopy.length - 1];
      setHistory(historyCopy);
      setMode(prevMode);
    }
  }
  return { mode, transition, back };
}
