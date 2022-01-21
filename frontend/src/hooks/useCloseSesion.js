const useCloseSesion = (setUserDataStatus) => {
    setUserDataStatus({
        login: false,
        name: null,
        email: null,
    });
    localStorage.removeItem("login");

    localStorage.removeItem("name");

    localStorage.removeItem("email");
};

export {
    useCloseSesion
}