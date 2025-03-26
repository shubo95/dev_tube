import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import SearchItemsContainer from "./SearchItemsContainer";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";

const SearchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="px-6 pt-4 overflow-y-auto h-screen pb-20 w-full">
      <ButtonList />
      <SearchItemsContainer />
    </div>
  );
};

export default SearchPage;
