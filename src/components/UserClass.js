import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo : {
                login:"Ritik",
                location:"delhi",
                avatar_url:"http://dummy-photo.com"
            },
        };
    }

    async componentDidMount () {
        const data = await fetch('https://api.github.com/users/Ritikbhatt22');
        const json = await data.json();
        this.setState({
            userInfo : json
        });
        console.log(json);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate is called did ");
    }
  
    componentWillUnmount() {
        console.log("componentWillUnmount is called ");
    }
    render() {
        const {login, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src = {avatar_url}/>
                <h2>Name: {login} </h2>
                <h3>Location: {location}</h3>
                <h4>Contact: 7579******</h4>
            </div>
        );
    }
}

export default UserClass;