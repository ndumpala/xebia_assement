import React from "react";
import { connect } from "react-redux";

class Loginpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      password: null,
      errors: {
        userName: "",
        password: ""
      },
      authFail: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    let valid = true;
    Object.values(this.state.errors).forEach(
      val => val.length > 0 && (valid = false)
    );
    return valid;
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "userName":
        errors.userName =
          value.length < 3 ? "Full Name must be 3 characters long!" : "";
        break;
      case "password":
        errors.password =
          value.length < 3 ? "Password must be 3 characters long!" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value, authFail: false });
  }

  async handleSubmit() {
    if (this.validateForm()) {
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
          this.props.sendLogin({ userName: userName, login: true });
          sessionStorage.setItem("user", userName);
          history.push("/searchResultsPage");
          return true;
        }
        return false;
      });
      this.setState({
        authFail: true
      });
    }
  }

  render() {
    return (
      <div className="App bgBlack color-white">
        <h1 className="padding-vertical-lg margin-horizontal-lg">sCart</h1>
        <div className="login bgBlack text-center padding-vertical-xlg">
          <div className="text-size-sm">LogIn</div>
          <div className="margin-vertical-lg text-size-sm">
            <label htmlFor="userName">User Name:</label>
            <input
              type="text"
              id="userName"
              placeholder="userName"
              className="margin-horizontal-sm"
              name="userName"
              onChange={this.handleChange}
              required
            />
          </div>
          {this.state.errors.userName && (
            <div className="error">{this.state.errors.userName}</div>
          )}
          <div className="margin-vertical-lg text-size-sm">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              className="margin-horizontal-sm"
              name="password"
              onChange={this.handleChange}
              required
            />
          </div>
          {this.state.errors.password.length > 0 && (
            <span className="error">{this.state.errors.password}</span>
          )}
          <div className="margin-vertical-lg">
            <button
              className="success text-size-sm"
              name="button"
              onClick={this.handleSubmit}
            >
              Sign In
            </button>
            {this.state.authFail && (
              <div className="error margin-vertical-md">
                Please Enter a Valid Details.
              </div>
            )}
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
