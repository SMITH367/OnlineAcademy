const getRoute = (route) => {

    let id = ""
    route = route.split("").reverse().join("")
    for (let i = 0; i < route.length; i++) {
        if (route[i] !== "/") {
            id += route[i]
        } else {
            break
        }
    }
    return id.split("").reverse().join("")

}
export {

    getRoute
}