import React from "react";


const ListingCard= React.memo(({
  listing,
  key
}) => {
  const { brand, colour, price, image, discount, title } = listing;

  const  { final_price } = price;
  const  { color } = colour;

  //console.log( brand,image, color, discount, title, final_price, 'value');

  var divStyle = {
    'background-color': color,
    width: '15px',
    height: '15px'
  };
  
  return (
    <div className="listing margin-horizontal-md">
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
          <span>{title}</span>
          <span>{brand}</span>
          <span className="text-size-sm">{`$${final_price}`}</span>
        </div>
        <div className="display-flex flex-column text-right margin-horizontal-md">
          <span className="display-flex">
            <span className="padding-horizontal-sm">color</span>
            <span style={divStyle}/>
          </span>
          <span>{`${discount}% OFF`}</span>
          <a href="https://xzbwj.csb.app/searchResultsPage">Add</a>
        </div>
      </div>
    </div>
  );
});

export default ListingCard;
