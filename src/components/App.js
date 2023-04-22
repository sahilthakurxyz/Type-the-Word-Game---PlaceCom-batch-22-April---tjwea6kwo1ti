import React, { useState, useEffect } from "react";
import "../styles/App.css";

const WORD_LIST = ["apple", "banana", "cherry", "grape", "orange"];

function App() {
  const [word, setWord] = useState("");
  const [flashWord, setFlashWord] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (flashWord) {
      setWord(WORD_LIST[index]);
    }
    const timer = setTimeout(() => {
      setWord("");

      setFlashWord(!true);
    }, 500);
  }, [index]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (WORD_LIST.includes(userInput.toLowerCase())) {
      setResult("You won!");
    } else {
      setResult("You lost!");
    }
    setUserInput("");
  };
  const handleRestartClick = () => {
    setResult("");
    setFlashWord(true);
    setIndex((pre) => pre + 1);
  };
  return (
    <div className="mini-game-container">
      <h2 className="mini-game-title">Mini Game</h2>
      <p className="mini-game-word">{word}</p>
      {result.length ? (
        ""
      ) : (
        <form className="mini-game-form" onSubmit={handleFormSubmit}>
          <input
            className="mini-game-input"
            type="text"
            value={userInput}
            onChange={handleInputChange}
          />
          <button className="mini-game-button" type="submit">
            Check Answer
          </button>
        </form>
      )}
      {result && (
        <>
          <p className="mini-game-result">{result}</p>
          <button
            className="mini-game-restart-button"
            onClick={handleRestartClick}
          >
            Restart
          </button>
        </>
      )}
    </div>
  );
}

export default App;
