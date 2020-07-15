import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };

  responseFacebook = (response) => {
    console.log(response);
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Hi, {this.state.name}</h2>
          <span>Email: {this.state.email}</span>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="2642577286061285"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          // cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}
export default Facebook;
