import React from "react";
import { INPUT_TYPES } from "../scripts/formData";

// const FormCollection = ({ data }) => {
//   console.log(data);
//   return (
//     <div>
//       FormCollection
//       {data.map((useitems, index) => {
//         const { keylabel, type, name } = useitems;
//         return (
//           <div ={index}>
//             <label>{label}</label>
//             {type === INPUT_TYPES.password && (
//               <input type={type} name={name} className="ms-1" />
//             )}
//             {type === INPUT_TYPES.email && (
//               <input type={type} name={name} className="ms-1" />
//             )}

//             {type !== INPUT_TYPES.password && type !== INPUT_TYPES.email && (
//               <input type={type} name={name} className="ms-1" />
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

const FormCollection = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((useItems, index) => {
        const { label, type, name } = useItems;
        return (
          <div key={index}>
            <label>{label}</label>
            <input  type={type} name={name} />
          </div>
        );
      })}
    </div>
  );
};

export default FormCollection;
