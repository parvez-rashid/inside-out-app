import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😂": "Laughing",
  "🥺": "Pleading",
  "😅": "Discomfort",
  "🙃": "Upside down face",
  "👍": "Thumbs Up",
  "🙈": "See-No-Evil Monkey",
  "🍎": "Apple",
  "🍉": "Watermelon",
  "❤️": "Heart",
  "🔥": "Fire"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Not available in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside outtt!</h1>
      <h2>Enter your emoji below</h2>
      <input onChange={emojiInputHandler}></input>
      <div>
        <h2> {meaning} </h2>

        <h3> Emojis we know </h3>
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
              style={{
                fontSize: "2rem",
                padding: "1rem",
                cursor: "pointer"
              }}
            >
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
