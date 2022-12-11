export const isValidInput = (inputValue, inputType) => {
  let error = "";

  if (inputValue === "") {
    error = "Ovo polje je obavezno\n";
  }

  if (inputType === "email") {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regex.test(inputValue)) {
      error = error + "E-mail nije ispravan\n";
    }
  }

  return error;
};
