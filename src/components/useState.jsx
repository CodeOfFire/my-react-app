// import React from "react";

// const FormCollection = () => {
//   let count = 0;

//   const incrementCount = () => {
//     count++;
//     let x = 6;
//     // Update the paragraphs directly using document.getElementById
//     document.getElementById("1st").innerText = count;
//     document.getElementById("2nd").innerText = count;
//     document.getElementById("3rd").innerText = count;
//     document.getElementById("div hai").4th.innerText = count;
//   };

//   return (
//     <>
//       <button onClick={incrementCount}>Increment Count</button>
//       <p id="1st">{count}</p>
//       <p id="2nd">{count}</p>
//       <p id="3rd">{count}</p>
//       <div id="div hai">
//         <p id="4">{count}</p>
//         <p id="5">{count}</p>
//         <p id="6">{count}</p>
//       </div>
//     </>
//   );
// };

// export default FormCollection;

// to solve the problem of using document.getElementById again and again to change the value of element we use useState()
import React, { useState } from "react";

const FormCollection = () => {
  const [count, setCount] = useState(0); // Use state to track count

  const incrementCount = () => {
    setCount(count + 1); // Update state on button click
  };

  return (
    // kya dikhana hai Ui page par aur iske upar sare functions ya state like useState or variables banaye jate hain
    <>
      <button onClick={incrementCount}>Increment Count</button>
      <p id="1st">{count}</p>
      <p id="2nd">{count}</p>
      <p id="3rd">{count}</p>
      <div>
        <p id="4">{count}</p>
        <p id="5">{count}</p>
        <p id="6">{count}</p>
      </div>
    </>
  );
};

export default FormCollection;
