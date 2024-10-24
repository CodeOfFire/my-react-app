import React, { useState } from "react";

const FormCollection = () => {
  const [data, setData] = useState([
    {
      name: "name",
      type: "text",
      label: "address",
      containerClassNames: "mb-1 col-md-4",
    },
  ]);
  return (
    <div>
      {data.map((item, index) => (
        <>
          <div key={index} className={item.containerClassNames}>
            <input type={item.type} name={item.name} />
            <label>{item.label}</label>
          </div>
        </>
      ))}
    </div>
  );
};

export default FormCollection;

// to solve the problem of using document.getElementById again and again to change the value of element we use useState()
// import React, { useState } from "react";

// const FormCollection =
//     [
//     {
//       name: "name",
//       type: "text",
//       label: "address",
//       containerClassNames: "mb-1 col-md-4",
//     },
//   ];

//   // kya dikhana hai Ui page par aur iske upar sare functions ya state like useState or variables banaye jate hain

//    FormCollection.map((useItem, index) => {
//     const { label, name, type, containerClassNames } = useItem;
//     return(
//         <>
//       <h1>hhjhjjh</h1>
//       <div key={index} className={containerClassNames}>
//         <input type={type} name={name} />
//         <label>{label}</label>
//       </div>
//       </>
//     )
//   })

//   )
// };

// export default FormCollection;
