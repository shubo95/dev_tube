import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="px-6 pt-4 overflow-y-auto h-screen pb-20">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
