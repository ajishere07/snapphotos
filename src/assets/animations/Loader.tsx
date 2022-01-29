import React, { FC } from "react";
import Logo from "../images/Brand.png";

const Loader: FC = () => {
  return (
    <div className="w-24 h-24 rounded-full ">
      <img
        className=" rounded-full w-full h-full animate-bounce"
        src={Logo}
        alt="loading"
      />
      <h4 className="text-center font-bold italic">Loading...</h4>
    </div>
  );
};

export default Loader;
