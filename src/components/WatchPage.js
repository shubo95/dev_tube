import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { YOUTUBE_VIDEO_BY_ID } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();
  const getVideoByID = async () => {
    const data = await fetch(`${YOUTUBE_VIDEO_BY_ID}&id=${videoId}`);
    const json = await data.json();
    setVideoDetails(json.items[0]);
  };
  useEffect(() => {
    dispatch(closeMenu());
    getVideoByID();
  }, []);

  return (
    <div className="flex flex-col w-full py-6 h-screen overflow-y-auto pb-24">
      <div className="px-5 flex w-full gap-5">
        <div className="w-[950px] flex flex-col gap-2">
          <iframe
            width="950"
            height="550"
            src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
            title="YouTube video player"
            className="rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div>
            <h2 className="font-bold text-lg">
              {videoDetails?.snippet?.title}
            </h2>
            <div className="py-2">
              <p className="font-bold">{videoDetails?.snippet?.channelTitle}</p>
            </div>
            <div className="bg-stone-200 p-4 rounded-lg w-full my-1">
              <p className="line-clamp-3 break-all">
                {videoDetails?.snippet?.description}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div className="w-[950px]">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
