import React, { useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";

const ListingCardContainer = React.memo(() => {
  const [listings, setListings] = useState();

  useEffect(() => {
    async function fetchFilterData() {
      const response = await fetch("https://xebiascart.herokuapp.com/products?title=Lotto");
      const listingsData = await response.json();
      setListings(listingsData);
    }
    fetchFilterData();
  }, []);

  

  const renderListings = () => {
    console.log(listings, 'listings');
    
    return listings && listings.length > 0 && listings.map((details, index) => {
      return (
        <ListingCard listing={details} key={index} />
      );
    });
  }

  return (
    <div className="display-flex flex-warp margin-vertical-md">
      {renderListings()}
    </div>
  );
});

export default ListingCardContainer;
