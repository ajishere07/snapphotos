import React, { FC, useState, useEffect, useRef } from "react";
import {
  addEmail,
  addPassword,
  addUsername,
} from "../../features/Authentications/userCredentialsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

type Props = {
  typeOfInput: string;
  titleOfInput: string;
  placeholder?: string;
};

const Input: FC<Props> = ({ typeOfInput, titleOfInput, placeholder }) => {
  const dispatch = useAppDispatch();
  const { email, name, password } = useAppSelector(
    (state) => state.credentials
  );
  // using the useRef to know which 'type' of input rendered here;
  // is it a email input or password input or name input
  const inputTypeRef = useRef<HTMLInputElement>(null);
  const [inputContent, setInputContent] = useState<string>("");

  useEffect(() => {
    if (inputTypeRef.current?.placeholder === "Enter your email")
      dispatch(addEmail(inputContent));

    if (inputTypeRef.current?.placeholder === "Enter your password")
      dispatch(addPassword(inputContent));

    if (inputTypeRef.current?.placeholder === "Enter your name")
      dispatch(addUsername(inputContent));
  }, [inputContent]);
  console.log(email, password, name);

  return (
    <div className="w-full my-4">
      <label className="mb-2">{titleOfInput}</label>
      <input
        ref={inputTypeRef}
        value={inputContent || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputContent(e.target.value)
        }
        type={typeOfInput}
        placeholder={placeholder}
        required
        className="block w-full h-10 rounded-md outline-none border-2 border-secondary focus:border-black hover:border-secondaryDark px-2  transition-all"
      />
    </div>
  );
};

export default Input;
