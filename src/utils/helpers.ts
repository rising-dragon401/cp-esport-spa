export const validEmail = (value: string) => {
  return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Email is not correct."
    : "";
};

export const validPhoneNumber = (value: string) => {
  return !value.match("[0-9]{10}") ? "Phone number is invalid." : "";
};
