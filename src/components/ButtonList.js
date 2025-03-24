import React from "react";
import Button from "./Button";
import { FILTER_LIST } from "../utils/constants";

const ButtonList = () => {
  return (
    <div className="flex">
      {FILTER_LIST.map((item) => (
        <Button name={item} key={item} />
      ))}
    </div>
  );
};

export default ButtonList;
