import {
  FetchData
} from "../components/services/fetchData";
import {
  lengthValidation,
  emailValidation,
} from "../components/services/validations";

import {
  Navigate
} from "react-router-dom";

const useLoginSesion = async (e, setUserDataStatus, email, password) => {
  e.preventDefault()
  if (lengthValidation(email) === true && lengthValidation(password) === true) {
    if (emailValidation(email) === true) {
      const fetch = new FetchData("http://localhost:3000/login");

      const dataUser = await fetch.FetchDataApi({
          email: email,
          password: password,
        },
        "POST"
      );

      if (dataUser !== false) {
        const login = true;
        setUserDataStatus({
          login: login.toString(),
          name: dataUser.name,
          email: dataUser.email,
        });
        localStorage.setItem("login", "true");
        localStorage.setItem("name", dataUser.name);
        localStorage.setItem("email", dataUser.email);

        return <Navigate to = {
          "/"
        }
        />;
      } else {
        alert("Usuario o contraseña invalidos");
      }
    } else {
      alert("Email invalido");
    }
  } else {
    alert("No puedes ingresar caracteres vacios");
  }
};

export {
  useLoginSesion
};