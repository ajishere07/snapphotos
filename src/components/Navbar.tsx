import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  SearchIcon,
  MenuIcon,
  HomeIcon,
  UploadIcon,
  PhotographIcon,
  BellIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import Logo from "../assets/images/Brand.png";
const Navbar: FC = () => {
  const navigate: any = useNavigate();
  return (
    <nav className="shadow-sm border-b bg-white z-50 sticky top-0 ">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* left */}
        <div
          className="relative hidden md:inline-flex md:items-center w-16 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="logo" className="object-cover" />
          <h1 className="text-2xl">
            <span className="font-black">Snap</span>
            <span className="font-thin">Photos</span>
          </h1>
        </div>
        <div
          className="relative w-16 md:hidden flex-shrink-0 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="logo" className="object-cover" />
        </div>
        {/* middle-sec */}
        {/* <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              className="bg-gray-50 w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              placeholder="search"
            />
          </div>
        </div> */}
        {/* right */}
        <div className="flex items-center justify-between space-x-6">
          {/* <HomeIcon className="navBtn" onClick={() => navigate.push("/")} />
          <MenuIcon className="h-10 md:hidden cursor-pointer " /> */}
          <div className="navTab " onClick={() => navigate("/albums")}>
            <HomeIcon className="w-6 mr-1 peer" />
            <h1 className="md:block hidden hover:block peer-hover:block transition-all">
              Home
            </h1>
          </div>
          <div className="navTab" onClick={() => navigate("/albums")}>
            <PhotographIcon className="w-6 mr-1 peer" />
            <h1 className="md:block hidden hover:block peer-hover:block">
              Albums
            </h1>
          </div>
          <div className="navTab">
            <BellIcon className="w-6 mr-1 peer" />
            <h1 className="md:block hidden hover:block peer-hover:block">
              Notifications
            </h1>
          </div>
          <div className="navTab">
            <QuestionMarkCircleIcon className="w-6 mr-1 peer" />
            <h1 className="md:block hidden hover:block peer-hover:block">
              Help
            </h1>
          </div>

          {/* {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-1 bg-red-400 w-5 h-5 animate-pulse text-white flex items-center justify-center rounded-full">
                  3
                </div>
              </div>

              <PlusCircleIcon
                className="navBtn"
                onClick={() => setOpen(true)}
              />

              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                // src="https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-no-way-home-poster-tom-holland-sony.jpg?resize=768%2C432"
                src={session.user.image}
                onClick={signOut}
                className="h-10 w-10 rounded-full cursor-pointer object-cover "
                alt="profile pic"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
