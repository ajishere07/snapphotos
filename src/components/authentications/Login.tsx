import Input from "./Input";
import Logo from "../../assets/images/Brand.png";
import Button from "./Button";
import HorizontalLine from "./HorizontalLine";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { showSignupPage } from "../../features/Authentications/renderPage";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { db, auth } from "../../configuration/firebase/firebase";
import toast, { Toaster } from "react-hot-toast";
import { LoginIcon } from "@heroicons/react/solid";
const Login = () => {
  const navigate: any = useNavigate();

  const dispatch = useAppDispatch();
  const { name, email, password } = useAppSelector(
    (state) => state.credentials
  );
  const signinUser = async (): Promise<any> => {
    if (!email || !password) {
      alert("fill all the fields first");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast(
        () => (
          <span>
            <LoginIcon className="w-4 inline" /> Logged in
          </span>
        ),
        { duration: 2000 }
      );
      navigate("/");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  return (
    <div className="max-w-md bg-white mx-auto p-4 shadow-sm">
      <img src={Logo} alt="logo" className="w-28 mx-auto" />
      {/* TODO: adding a font family for the brand snapphotos */}
      <h1 className="text-center">Welcome to SnapPhotos</h1>
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
      <Button buttonName="Sign in" fun={signinUser} />
      {/* <HorizontalLine contentBetweenLine="Login via GOOGLE" /> */}
      {/* TODO: Google sign in option */}
      <h1 className="text-sm text-center my-4">
        Don't Have An Account &nbsp;
        <span
          className="hover:underline text-link cursor-pointer"
          onClick={() => dispatch(showSignupPage(false))}
        >
          Create An Account
        </span>
      </h1>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Login;
