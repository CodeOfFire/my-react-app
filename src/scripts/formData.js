import { useState } from "react";

 export const USER_DETAILS = {
  email: "email",
  firstName: "first-name",
  lastNAme: "last-name",
  phone: "phone",
};
export const INITIAL_STATE = {
  [USER_DETAILS.email]: "john@doe.com",
  [USER_DETAILS.firstName]: "john",
  [USER_DETAILS.lastNAme]: "Doe",
  [USER_DETAILS.phone]: "7876767667",
};

export const USER_DETAILS_FORM_ELEMENTS = [
  {
    name: USER_DETAILS.firstName,
    placeholder: "enter your first name",
    label:"First Name"
  },
  {
    name: USER_DETAILS.lastNAme,
    placeholder: "enter your last name",
    label:"Last Name"
  },
  {
    name: USER_DETAILS.email,
    placeholder: "Enter your email",
    type: "email",
    label:"Email"
  },
  {
    name: USER_DETAILS.phone,
    placeholder: "enter your phone ",
    type: "number",
    label:"Phone"
  },
];
