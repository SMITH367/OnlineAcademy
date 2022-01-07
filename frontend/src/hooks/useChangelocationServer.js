import {
    useEffect
} from "react";
const useChangelocationServer = () => {

    useEffect(() => {
        const originalLocation = window.location.href.split("/");
        let newLocation = `${originalLocation[0]}//${originalLocation[1]}${originalLocation[2]}/?#/${originalLocation[4]}`;
        window.location.href = newLocation;
    }, []);
}

export {
    useChangelocationServer
}