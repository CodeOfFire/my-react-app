export const INPUT_TYPES = {
  checkbox: "checkbox",
  input: "input",
  email: "email",
  select: "select",
  text: "text",
};

const FORM_FIELDS = {
  userdetails: {
    address: "address",
    email: "email",
    hobbies: "hobbies",
    agree: "agree",
  },
};
export const { userdetails: USER_DETAILS_NAMES } = FORM_FIELDS;
const USER_DETAILS_VALUES = {
  [USER_DETAILS_NAMES.address]: "ggg",
  [USER_DETAILS_NAMES.email]: "",
  [USER_DETAILS_NAMES.agree]: false,
  [USER_DETAILS_NAMES.hobbies]: [],
};

const FORM_DATA = {
  getUserFormFields: () => {
    return [
      {
        name: USER_DETAILS_NAMES.address,
        type: INPUT_TYPES.text,
        containerClassNames: "mb-1 col-md-4",
        label: "user address",
      },
    ];
  },
};

export const { getUserFormFields: GET_USER_FORM_FIELDS } = FORM_DATA;
