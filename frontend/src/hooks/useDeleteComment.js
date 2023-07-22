import {
    FetchData
} from "../components/services/fetchData";
import { getBACKENDurl } from "../components/services/getBACKENDurl";


const useDeleteComment = async (e, email, comment, course, setCommentSend) => {

    e.preventDefault()


    const token = localStorage.getItem("token")


    const url = `${getBACKENDurl}/comments/` + course
    const fetch = new FetchData(url);



    const sendComment = await fetch.FetchDataApi({
        email,
        comment
    }, "DELETE", token)

    if (sendComment === true) {
        setCommentSend(true)
        setTimeout(() => {
            setCommentSend(false)
        }, 1)
    }


}


export {
    useDeleteComment
};