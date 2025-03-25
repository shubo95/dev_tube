import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_VIDEO_API } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import SearchVideoResult from "./SearchVideoResult";

const SearchItemsContainer = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState(null);
  const query = searchParams.get("query");

  useEffect(() => {
    getSearchData();
  }, []);

  const getSearchData = async () => {
    const response = await fetch(YOUTUBE_SEARCH_VIDEO_API + "&q=" + query);
    const json = await response.json();
    setSearchResults(json.items);
  };

  console.log("s", searchResults);

  return (
    <div className="flex flex-col gap-4 w-full py-6">
      {searchResults?.map((result) => (
        <SearchVideoResult data={result} key={result?.id?.videoId} />
      ))}
    </div>
  );
};

export default SearchItemsContainer;
