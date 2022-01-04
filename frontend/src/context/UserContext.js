import { createContext } from "react";

const Usercontext = createContext({
    
    login: false,
    name: null,
    email: null

})  

export {
    Usercontext
}