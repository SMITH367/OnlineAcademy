import {
    FetchData
} from "../components/services/fetchData";

import {
    lengthValidation
} from "../components/services/validations"
const useSendComment = async (e, name, comment, course, email, setCommentSend) => {

    e.preventDefault()
    const token = localStorage.getItem("token")


    const url = "http://localhost:3000/comments/" + course
    const fetch = new FetchData(url);

    if (lengthValidation(comment)) {

        const sendComment = await fetch.FetchDataApi({
            name,
            comment,
            email
        }, "POST", token)

        if (sendComment === true) {
            setCommentSend(true)
            setTimeout(() => {
                setCommentSend(false)
            }, 1)
        }

    } else {
        alert("No puedes ingresar campos vacios")
    }

}


export {
    useSendComment
};