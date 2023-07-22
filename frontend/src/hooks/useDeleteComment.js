import {
    FetchData
} from "../components/services/fetchData";



const useDeleteComment = async (e, email, comment, course, setCommentSend) => {

    e.preventDefault()


    const token = localStorage.getItem("token")


    const url = "http://localhost:3000/comments/" + course
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