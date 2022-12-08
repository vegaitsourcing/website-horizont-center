export const isValidInput = (inputValue, inputType) => {
  let error = "";

  if (inputValue === "") {
    error = "Ovo polje je obavezno\n";
  }

  if (inputType === "password") {
    if (inputValue.password.length < 8) {
      error = error + "Lozinka mora imati minimum 8 karaktera\n";
    }
    if (inputValue.password !== inputValue.passwordConfirm) {
      error = error + "Lozinke moraju biti jednake\n";
    }
  }

  if (inputType === "passwordConfirm") {
    if (inputValue.password.length < 8) {
      error = error + "Lozinka mora imati minimum 8 karaktera\n";
    }
    if (inputValue.password !== inputValue.passwordConfirm) {
      error = error + "Lozinke moraju biti jednake\n";
    }
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
