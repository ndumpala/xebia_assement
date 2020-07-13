import React, { useEffect } from "react";
import { connect } from 'react-redux';
import ListingCard from "../components/ListingCard";

const ListingCardContainer = React.memo(({listings, updateListings}) => {

  useEffect(() => {
    async function fetchFilterData() {
      const response = await fetch("https://xebiascart.herokuapp.com/products");
      const listingsData = await response.json();
      return updateListings(listingsData);
    }
    fetchFilterData();
  }, []);

  const renderListings = () => {
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

function mapStateToProps(state) {
  const {
    tasks
  } = state;

  const { listings } = tasks;
  return {
    listings,
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
)(ListingCardContainer);
