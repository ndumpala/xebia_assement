import React from "react";

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
        console.log("passed");
        history.push('/searchResultsPage');
        return true;
      }
      console.log("error handling goes here");
      return false;
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="">sCart</h1>
        <div>
          <div>Login</div>
          <div className="margin-vertical-lg">
            <label htmlFor="userName">
              User Name <span className="required">*</span>
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
          <div className="margin-vertical-lg">
            <label htmlFor="password">
              Password <span className="required">*</span>
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
              className="success"
              name="button"
              onClick={this.handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Loginpage;
