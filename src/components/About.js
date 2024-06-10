import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {

    constructor(props){
        super(props)

        // console.log("pArent COnstructor")
    }

    componentDidMount(){
        // console.log("Parent Component DId Mount")
    }

    render(){
        // console.log("parent render")
        return (
            <div>
                <h1>About</h1>
                <h2>This is React Learning</h2>
                {/* <User name={"Ahsan Javed(function)"}></User> */}
                <UserClass name={"AhSan Javed"} location={"Chakwal"}></UserClass>
            </div>
        )
    }
}


// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is React Learning</h2>
//             {/* <User name={"Ahsan Javed(function)"}></User> */}
//             <UserClass name={"Ahsan Javed(Class)"} location={"Chakwal"}></UserClass>
//         </div>
//     )
// }


export default About;