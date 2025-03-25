import React from "react";
import { Link } from "react-router-dom";

const SearchVideoResult = ({ data }) => {
  const { id, snippet } = data;
  return (
    <div className="flex gap-5 items-start">
      <div className="basis-[40%]">
        <Link to={"/watch?v=" + id.videoId}>
          <img
            className="rounded-lg w-full"
            alt="thumbnail"
            src={snippet?.thumbnails?.medium.url}
          />
        </Link>
      </div>
      <Link to={"/watch?v=" + id.videoId} className="basis-[60%]">
        <div className="w-full flex flex-col gap-3">
          <h1 className="text-xl font-semibold">{snippet?.title}</h1>
          <p className="text-stone-500 text-sm">{snippet.channelTitle}</p>
          <p className="text-stone-500 text-sm">{snippet.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default SearchVideoResult;
