import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😀": "Grinning/Smiley Face",
  "😅": "Anxiety while laughing",
  "🖖": "Vulcan Salute",
  "😂": "Laughing very hard",
  "🤣": "Laughing very hard",
  "🤑": "Money mouth",
  "🤤": "Drooling",
  "👍": "Thumbs up",
  "✌️": "Victory/Peace",
  "❤️": "Heart, used to send to your loved ones",
  "😍": "used to indicate your love something",
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
    } else if (meaning === "Please enter an emoji") {
      setTextChange(meaning);
    } else {
      setTextChange(meaning);
    }
  }

  return (
    <div className="App">
      <h1> Emoji Interpretor </h1>
      <input
        type="text"
        style={{ width: "80%", padding: "1rem" }}
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
          key={emoji}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
