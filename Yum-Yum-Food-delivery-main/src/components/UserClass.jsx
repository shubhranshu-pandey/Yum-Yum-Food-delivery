import React from "react";
import { GITHUB_API } from "../Utils/apiConfig";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "SHUBH",
        location: "UP",
        avatar_url: "",
        bio: "",
      },
    };
  }

  async componentDidMount() {
    // console.log("child componentDidMount");

    // Here we call the API
    try {
      const data = await fetch(GITHUB_API.USER("shubhranshu-pandey"));
      const json = await data.json(); // Await the json() method

      // Update user data
      this.setState({
        userInfo: json,
      });

      console.log(json);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  componentDidUpdate(){
    console.log("component did update")
  }
  componentWillUnmount(){
    console.log("component will unmounted update")
  }
  render() {
    // const { name } = this.props;
    const { name, location, avatar_url, bio } = this.state.userInfo;

    // console.log("child render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Bio: {bio}</h2>
        <h2>Location: {location}</h2>
        <h2>Age: 23</h2>
        <h2>Contact: @shubh.com</h2>
      </div>
    );
  }
}

export default UserClass;
