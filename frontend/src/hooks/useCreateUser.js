import { FetchData } from "../components/services/fetchData";
import {
  lengthValidation,
  emailValidation,
} from "../components/services/validations";

const useCreateUser = async (userName, email, password, passwordConf) => {
  if (
    lengthValidation(email) === true &&
    lengthValidation(password) === true &&
    lengthValidation(userName) === true &&
    lengthValidation(passwordConf)
  ) {
    if (emailValidation(email) === true) {
      if (passwordConf === password && password.length > 5) {
        const fetch = new FetchData("http://localhost:3000/user");

        const dataUser = await fetch.FetchDataApi(
          {
            name: userName,
            email: email,
            password: password,
          },
          "POST"
        );

        if (dataUser.added === "true") {
          alert("Usuario creado con exito");
          window.location.href = "/";
        } else {
          alert("El email ya existe");
        }
      } else {
        alert("Las contraseñas deben coincidir ser de min 6 caracteres");
      }
    } else {
      alert("Email invalido");
    }
  } else {
    alert("No puedes ingresar caracteres vacios");
  }
};

export { useCreateUser };
