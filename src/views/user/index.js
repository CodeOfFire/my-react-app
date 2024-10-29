import React, { useState } from "react";
import FormCollection from "../../components/FormCollection";
import Button from "../../components/Button";
import { INITIAL_STATE,USER_DETAILS_FORM_ELEMENTS } from "../../scripts/formData";

const User = () => {
  const [userDetails, setUserDetails] = useState(INITIAL_STATE);
  const inputStateHandler =(ev) =>{
    setUserDetails((prev) =>({
      ...prev,
      [ev.target.name]:ev.target.value,
    }))
  }

const formSubmitHandler = (ev) =>{
  ev.preventDefault()
  console.log()

}



  return <div>
    <FormCollection data={USER_DETAILS_FORM_ELEMENTS}/>
  </div>;
};

export default User;
