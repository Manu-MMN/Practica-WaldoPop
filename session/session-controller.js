import { isUserLogeddIn } from "../utils/auth";
import { builtLoggedSession, builtUnLoggedSession } from "./session-view";



export function sessionController(sessionContainer) {

    if (isUserLogeddIn()) {
        sessionContainer.innerHTML = builtLoggedSession();
        const closeSessionButton = sessionContainer.querySelector("button")
        closeSessionButton.addeventlistener("click", () =>{
            localStorage.removeItem("jwt")
            sessionController(sessionContainer)
        })
    } else {
        sessionContainer.innerHTML= builtUnLoggedSession()
    }

}