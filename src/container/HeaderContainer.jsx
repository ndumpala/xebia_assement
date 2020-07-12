import React from "react";
import { connect } from 'react-redux';

function HeaderContainer(props) {
   const { userName, login } = props;

  return (
    <div className="display-flex flex-space-between">
      <div>
        <img
          src="https://vistapointe.net/images/logo-4.jpg"
          width="40"
          height="40"
          alt="logo"
        />
      </div>
      <div>search box</div>
      {login &&<div>Welcome {userName}</div>}
    </div>
  );
}

function mapStateToProps(state) {
  
  const {
    tasks
  } = state;

  const { userName, login} = tasks;

  console.log(state, tasks, userName, login,'state');

  return {
    userName,
    login
  };
}

export default connect(
  mapStateToProps,
)(HeaderContainer);
