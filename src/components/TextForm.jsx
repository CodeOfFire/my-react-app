import React, { useState } from "react";

const DATA = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
];

export default function TextForm({ heading }) {
  const [text, setText] = useState(DATA);
  console.log("text", text);
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("on change", event);
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{heading}</h1>

      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="6"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      {/* {text.map((useItem) => {

        return (
          <>
            <h1>{useItem.registration.toLocaleDateString()} </h1>
            <h3>{useItem.capacity}</h3>
            <h4>{useItem.color}</h4>
            <h5>{useItem.type}</h5>
          </>
        );
      })} */}

      {text.map((useItems) => {
        const { color, capacity, registration, type } = useItems;
        return (
          <>
            <h1>{capacity}</h1>
            <h2>{color}</h2>
            <h3>{type}</h3>
            <h2>{registration.toDateString()}</h2>
          </>
        );
      })}
    </div>
  );
}
