import React from "react";
import ButtonList from "./ButtonList";
import SearchItemsContainer from "./SearchItemsContainer";

const SearchPage = () => {
  return (
    <div className="px-6 pt-4 overflow-y-auto h-screen pb-20 w-full">
      <ButtonList />
      <SearchItemsContainer />
    </div>
  );
};

export default SearchPage;
