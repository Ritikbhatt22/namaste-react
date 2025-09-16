import { createContext } from "react"
const UserContextT = createContext({
    loggedInUser : "Default User"
});

export default UserContextT;