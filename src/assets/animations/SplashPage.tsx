import React from "react";
import Logo from "../images/Brand.png";

const SplashPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-24 h-24 rounded-full animate-pulse mx-auto">
        <img
          className=" rounded-full w-full h-full "
          src={Logo}
          alt="loading"
        />
        <h3 className="text-md">
          <span className="font-black">Snap</span>
          <span className="font-thin">Photos</span>
        </h3>
      </div>
    </div>
  );
};

export default SplashPage;
