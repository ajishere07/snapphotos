import React, { FC } from "react";
import Login from "../components/authentications/Login";
import Signup from "../components/authentications/Signup";
import Navbar from "../components/Navbar";
import { useAppSelector } from "../hooks/hooks";

const Authentications: FC = () => {
  // renderPage is a boolean which is responsible for
  // switching the signin And signup Page
  const renderPage = useAppSelector(
    (state) => state.signinPage.renderSigninPage
  );
  return (
    <>
      <Navbar />
      <main className="bg-slate-100 min-h-screen pt-2">
        {renderPage ? <Login /> : <Signup />}
      </main>
    </>
  );
};

export default Authentications;
