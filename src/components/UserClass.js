import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy name",
                location: "Default",
                avatar_url: "https://dummy-url"
            }
        }
        // console.log(this.props.name +"child constructor")
    }

    async componentDidMount(){
        // console.log(this.props.name + "Child Component DId Mount")
        const data = await fetch("https://api.github.com/users/ahsanjaved850")
        const json = await data.json()

        this.setState({
            userInfo: json,
        })
        console.log(json)
    }

    componentDidUpdate(){
        // console.log("Component Update")
    }

    componentWillUnmount(){
        // it will be called when the component will be removed from the page e.g. you move to another page
        // console.log("Component will unmount")
    }

    render () {
        // console.log(this.props.name +"child render")

        const {name, location, avatar_url} = this.state.userInfo
   
        return (
            <div className='user-card'>
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @ahsn850</h4>
            </div>
          )
    }
}
export default UserClass;

