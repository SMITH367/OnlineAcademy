import {
  FetchData
} from "../components/services/fetchData";
import {
  lengthValidation,
  emailValidation,
} from "../components/services/validations";


const useLoginSesion = async (
  setUserDataStatus,
  email,
  password,
) => {
  // setUserDataStatus({
  //     login: true,
  //     name: email,
  //     email: password,
  // });


  if (setUserDataStatus !== undefined) {
    if (
      lengthValidation(email) === true &&
      lengthValidation(password) === true
    ) {
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
          localStorage.setItem("login", "true")
          localStorage.setItem("name", dataUser.name)
          localStorage.setItem("email", dataUser.email)

          const originalLocation = window.location.href.split("/")
          let newLocation = `${originalLocation[0]}//${originalLocation[1]}${originalLocation[2]}`;

          window.location.href = newLocation

        } else {
          alert("Usuario o contraseña invalidos");
        }
      } else {
        alert("Email invalido");
      }
    } else {
      alert("No puedes ingresar caracteres vacios");
    }
  } else {
    alert(".");
  }
};

export {
  useLoginSesion
};