import {
    FetchData
} from "../components/services/fetchData"
import {
    lengthValidation
} from "../components/services/validations";
import {
    refreshUserData
} from "../components/services/refeshUserData"


const useChangeName = async (e, url, name, email, token) => {

    e.preventDefault()


    const fetch = new FetchData(url + email);

    if (lengthValidation(name)) {
        const changeUserName = await fetch.FetchDataApi({
            name
        }, "PUT", token)
        if (changeUserName === true) {
            alert("Nombre cambiado con exito")
            refreshUserData(email)
        }

    } else {
        alert("No puedes ingresar campos vacios")
    }





}

export {
    useChangeName
}