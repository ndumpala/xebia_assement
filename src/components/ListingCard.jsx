import React from "react";
import { connect } from 'react-redux';

const ListingCard= React.memo(({
  listing,
  key,
  addToCart,
}) => {
  const { brand, colour, price, image, discount, title, id } = listing;

  const  { final_price } = price;
  const  { color } = colour;

  const addItem = (event) => {
    addToCart(event.target.name);
  }

  var divStyle = {
    'backgroundColor': color,
    width: '15px',
    height: '15px',
    border: '2px solid black',
  };

  return (
    <div className="listing margin-horizontal-sm">
        <div className="text-center">
          <img
            src={image}
            width="100"
            height="100"
            alt="logo"
          />
      </div>
      <div className="display-flex flex-space-between">
        <div className="display-flex flex-column ">
          <span className="padding-vertical-sm">{title}</span>
          <span className="padding-vertical-sm">{brand}</span>
          <span className="text-size-sm success">{`$${final_price}`}</span>
        </div>
        <div className="display-flex flex-column text-right margin-horizontal-md">
          <span className="display-flex padding-vertical-sm">
            <span className="padding-horizontal-sm">color</span>
            <span style={divStyle}/>
          </span>
          <span className="padding-vertical-sm">{`${discount}%OFF`}</span>
          <button className="success padding-vertical-sm cursor-pointer" name={id} onClick={event => addItem(event)}>Add</button>
        </div>
      </div>
    </div>
  );
});

const mapDispatchToProps = dispatch => {
  return {
    addToCart: data => {
      dispatch({type: "ADD_TO_CART", payload: data})
      }
    }
}

export default connect(
  null,
  mapDispatchToProps
)(ListingCard);
