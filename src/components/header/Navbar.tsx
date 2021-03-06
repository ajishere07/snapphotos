import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "@firebase/auth";
import { auth } from "../../configuration/firebase/firebase";
import {
  HomeIcon,
  PhotographIcon,
  BellIcon,
  LoginIcon,
  LogoutIcon,
} from "@heroicons/react/solid";
import Logo from "../../assets/images/Brand.png";

import TabTitle from "./TabTitle";
import toast, { Toaster } from "react-hot-toast";

interface userAuth {
  userCre: any;
}
const Navbar: FC<userAuth> = ({ userCre }) => {
  const navigate: any = useNavigate();

  return (
    <nav className=" shadow-lg bg-white z-50 sticky top-0 ">
      <div className="flex justify-between max-w-6xl mx-2 sm:mx-5 xl:mx-auto">
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

        <div className="flex items-center justify-between space-x-6">
          {userCre ? (
            <>
              <div className="navTab " onClick={() => navigate("/")}>
                <HomeIcon className="w-6 mr-1 peer" />
                <TabTitle title="Home" />
              </div>
              <div className="navTab" onClick={() => navigate("/albums")}>
                <PhotographIcon className="w-6 mr-1 peer" />
                <TabTitle title="Albums" />
              </div>
              <div className="navTab">
                <BellIcon className="w-6 mr-1 peer" />
                <TabTitle title="Notifications" />
              </div>
              {/* <div className="navTab">
                <QuestionMarkCircleIcon className="w-6 mr-1 peer" />
                <TabTitle title="Help" />
              </div> */}
              <button
                className="navTab border-2 border-black p-1 rounded-md hover:bg-black hover:text-white transition-all ease-in-out"
                onClick={() => {
                  signOut(auth);
                  toast(
                    () => (
                      <span>
                        <LogoutIcon className="w-4 inline" /> Logged Out
                      </span>
                    ),
                    { duration: 2000 }
                  );
                  navigate("/enter");
                }}
              >
                <LogoutIcon className="w-6 mr-1 peer" /> <span>Sign out</span>
              </button>
            </>
          ) : (
            <button
              className="navTab border-2 border-black p-1 rounded-md hover:bg-black hover:text-white transition-all ease-in-out"
              onClick={() => navigate("/enter")}
            >
              <LoginIcon className="w-6 mr-1 peer" /> <span>Sign in</span>
            </button>
          )}
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </nav>
  );
};

export default Navbar;
