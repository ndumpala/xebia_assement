import React from "react";
import { connect } from "react-redux";

class Loginpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePassWordChange = this.handlePassWordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserChange(event) {
    this.setState({ userName: event.target.value });
  }

  handlePassWordChange(event) {
    this.setState({ password: event.target.value });
  }

  async handleSubmit() {
    const { userName, password } = this.state;
    const { history } = this.props;
    const response = await fetch(
      `https://xebiascart.herokuapp.com/users?username=${userName}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      }
    );

    const user = await response.json();

    user.map(user => {
      if (user.username === userName && user.password === password) {
        console.log("log In success full");
        this.props.sendLogin({ userName: userName, login: true });
        history.push("/searchResultsPage");
        return true;
      }
      alert("please inter valid details");
      console.log("log In failure error handling goes here");
      return false;
    });
  }

  render() {
    return (
      <div className="App bgBlack color-white">
        <h1 className="padding-vertical-lg margin-horizontal-lg">sCart</h1>
        <div class="login bgBlack text-center padding-vertical-xlg text-size-sm">
          <div>LogIn</div>
          <div className="margin-vertical-lg">
            <label htmlFor="userName">
              User Name:
            </label>
            <input
              type="text"
              id="userName"
              placeholder="userName"
              name="userName"
              onChange={this.handleUserChange}
              required
            />
          </div>
          <div className="margin-vertical-lg dispaly-flex flex-space-between">
            <label htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              name="password"
              onChange={this.handlePassWordChange}
              required
            />
          </div>
          <div className="margin-vertical-lg">
            <button
              className="success text-size-sm"
              name="button"
              onClick={this.handleSubmit}
            >
              LogIn
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendLogin: data => {
      dispatch({ type: "FETCH_LOGIN_SUCCESS", payload: data });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Loginpage);
