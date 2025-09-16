import User from "./User";
import UserClass from "./UserClass";
import { useEffect } from "react";

const About = () => {
    // useEffect(()=>{
    //     // Timer INterval
    //     const timer = setInterval(()=>{
    //         console.log("set interval called");
    //     },1000);
    //     console.log("useEffect called");
    //     // Unmounting phase
    //     return () => {
    //         clearInterval(timer);
    //         console.log("UseEffect Return");
	//     }
    // },[]);

    return (
        <div>
            <h1>About</h1>
            <h2>This is namaste react web series</h2>
            {/* <User name = {"Ritik Bhatt (function)"}/> */}
            <UserClass name = {"Ritik Bhatt (Class)"} location = {"Delhi Class"}/>
        </div>
    )
}

export default About;