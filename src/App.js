import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😀": "Grinning/Smiley Face",
  "😅": "a little anxiety while laughing",
  "🖖": "Vulcan Salute",
  "😂": "Laughing very hard",
  "🤣": "Rolling on the floor while laughing",
  "🤑": "Money mouth",
  "🤤": "Drooling",
  "👍": "Thumbs up",
  "✌️": "Victory/Peace",
  "❤️": "Heart, used to send to your loved ones",
  "😍": "used to indicate you love/like something",
  "": "Please enter an emoji"
};

const emojiArray = Object.keys(emojiDictionary);

export default function App() {
  const [textChange, setTextChange] = useState("");

  function changeHandler(event) {
    const userInput = event.target.value;
    const meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      setTextChange("Sorry! " + userInput + " is not in our database");
    } else {
      setTextChange(meaning);
    }
  }

  function clickHandler(emoji) {
    const meaning = emojiDictionary[emoji];

    if (meaning === undefined) {
      setTextChange("Sorry! " + emoji + " is not in our database");
    } else {
      setTextChange(emoji + " means " + meaning);
    }
  }

  return (
    <div className="App">
      <h1> Emoji Interpretor </h1>
      <p>Enter an emoji or click one to know its meaning</p>
      <input
        type="text"
        style={{ width: "80%", padding: "1rem", fontSize: "1.5rem" }}
        onChange={changeHandler}
      />
      <p style={{ fontSize: "1.5rem" }}> {textChange} </p>
      {emojiArray.map((emoji) => (
        <span
          style={{
            fontSize: "2rem",
            padding: "1rem 0.5rem",
            cursor: "pointer"
          }}
          onClick={() => clickHandler(emoji)}
          key={emoji}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
