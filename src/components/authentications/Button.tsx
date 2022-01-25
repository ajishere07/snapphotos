import React, { FC } from "react";

type Props = {
  buttonName: string;
  fun: any;
};

const Button: FC<Props> = ({ buttonName, fun }) => {
  return (
    <button
      className="text-center w-full bg-black text-white rounded-md p-2 hover:bg-slate-800 transition-all ease-linear hover:scale-105"
      onClick={() => fun()}
    >
      {buttonName}
    </button>
  );
};

export default Button;
