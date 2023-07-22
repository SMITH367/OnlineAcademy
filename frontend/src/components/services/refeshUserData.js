import {
    FetchData
} from "./fetchData";


const refreshUserData = async (email) => {
    const url = "http://localhost:3000/user/"
    const getData = new FetchData(url + email);
    const userData = await getData.FetchDataApiGet();
    localStorage.setItem("name", userData[0].name)
    window.location.reload()
};

export {
    refreshUserData
}