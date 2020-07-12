import React from "react";
import HeaderContainer from "../container/HeaderContainer";
import FooterContainer from "../container/FooterContainer";
import FilterPanelContainer from "../container/FilterPanelContainer";
import ListingCardContainer from "../container/ListingCardContainer";

function SearchResultsPage() {
  return (
    <div className="">
      <HeaderContainer />
      <div className="display-flex flex-space-between">
        <div className="fliterContainer">
          <FilterPanelContainer />
        </div>
        <div className="listingsContainer">
          <ListingCardContainer />
        </div>
      </div>
      <FooterContainer />
    
    </div>
  );
}

export default SearchResultsPage;
