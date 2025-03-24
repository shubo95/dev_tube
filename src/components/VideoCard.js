import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-full bg-transparent pb-6">
      <img
        className="rounded-lg w-full"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold py-1">{title}</li>
        <li className="text-gray-500">{channelTitle}</li>
        <li className="text-gray-500">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
