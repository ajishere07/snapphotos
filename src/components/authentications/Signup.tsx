import React, { FC, useEffect, useState } from "react";
import Input from "./Input";
import Logo from "../../assets/images/Brand.png";
import Button from "./Button";

import { showSigninPage } from "../../features/Authentications/renderPage";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  addEmail,
  addPassword,
  addUsername,
} from "../../features/Authentications/userCredentialsSlice";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { setDoc, doc, Timestamp } from "@firebase/firestore";
import { auth, db } from "../../configuration/firebase/firebase";

import { NavigateFunction, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
const Signup: FC = () => {
  const [demo] = useState<string>("adfd");
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
  const { name, email, password } = useAppSelector(
    (state) => state.credentials
  );
  const signupUser = async (): Promise<any> => {
    if (!name || !email || !password) {
      alert("fill all the fields first");
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result);
      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        name,
        email,
        password,
        createdAt: Timestamp.fromDate(new Date()),
      });

      dispatch(() => {
        addEmail("");
        addUsername("");
        addPassword("");
      });
      toast(`Hello, ${name}`, { icon: "👋" });
      navigate("/");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  return (
    <div className="max-w-md bg-white mx-auto p-4 shadow-sm">
      <img src={Logo} alt="logo" className="w-28 mx-auto" />
      {/* TODO adding a font family for the brand snapphotos */}
      <h1 className="text-center">Welcome to SnapPhotos</h1>
      <Input
        titleOfInput="Username"
        typeOfInput="text"
        placeholder="Enter your name"
      />
      <Input
        titleOfInput="Email"
        typeOfInput="text"
        placeholder="Enter your email"
      />
      <Input
        titleOfInput="Password"
        typeOfInput="password"
        placeholder="Enter your password"
      />
      <Button buttonName="Sign up" fun={signupUser} />
      {/* <HorizontalLine contentBetweenLine="Sign up using" /> */}
      {/* TODO: Google sign in option */}

      <h1 className="text-sm text-center my-4">
        Already have an account &nbsp;
        <span
          className="hover:underline text-link  cursor-pointer"
          onClick={() => dispatch(showSigninPage(true))}
        >
          Login
        </span>
      </h1>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 30000 }}
      />
    </div>
  );
};

export default Signup;
