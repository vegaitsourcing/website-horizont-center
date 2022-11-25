export const isValidInput = (inputValue, input) => {
  let error = "";
  if (input.optional) return "";

  if (inputValue === "") {
    error = "Ovo polje je obavezno\n";
  }

  if (input.name === "password") {
    if (inputValue.length < 6) {
      error = error + "Lozinka mora imati minimum 6 karaktera";
    }
  }

  if (input.name === "email") {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regex.test(inputValue)) {
      error = error + "E-mail nije ispravan";
    }
  }

  return error;
};
