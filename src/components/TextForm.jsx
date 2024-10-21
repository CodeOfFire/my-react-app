import React, { useState } from "react";

export default function TextForm({ heading }) {
  const [text, setText] = useState("Enter text here");
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
    </div>
  );
}
