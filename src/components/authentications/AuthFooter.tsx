import React, { FC } from "react";

type Props = {
  hyperlinkContent: string;
  mainContent: string;
};

const AuthFooter: FC<Props> = ({ hyperlinkContent, mainContent }) => {
  return (
    <h1 className="text-sm text-center hover:underline hover:text-blue-400 cursor-pointer">
      {mainContent}
      <span className="hover:underline text-blue-400 cursor-pointer">
        {hyperlinkContent}
      </span>
    </h1>
  );
};

export default AuthFooter;
