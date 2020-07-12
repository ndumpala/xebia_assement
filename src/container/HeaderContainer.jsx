import React, { useState } from "react";
import { connect } from 'react-redux';

function HeaderContainer(props) {
   const { userName, login, cartItems, updateListings } = props;
   const cartLength = cartItems.length;

   const handleSearch = async (event) => {
    const keyword = event.target.value;
    const response = await fetch(`https://xebiascart.herokuapp.com/products?title=${keyword}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      }
    );
    updateListings(await response.json());
   }

  return (
    <div className="searchBox display-flex flex-space-between bgBlack padding-vertical-md margin-vertical-md flex-center-align">
      <div className=" display-flex padding-horizontal-md">
        <img
          src="https://vistapointe.net/images/logo-4.jpg"
          width="40"
          height="40"
          alt="logo"
        />
        <span className="color-white text-size-md padding-vertical-sm">sCart</span>
      </div>
      
        <input
            type="text"
            placeholder="Search Product"
            name="product"
            onChange={event => handleSearch(event)}
          />
      
      <div className="color-white padding-horizontal-md">
        {login &&<div>Welcome {userName}</div>}
        <div>{cartLength} Items</div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  
  const {
    tasks
  } = state;

  const { userName, login, cartItems } = tasks;

  return {
    userName,
    login,
    cartItems
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateListings: data => {
      dispatch({type: "FETCH_LISTINGS", payload: data})
      }
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
