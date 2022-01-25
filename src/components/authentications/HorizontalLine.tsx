import React, { FC } from "react";

type Props = { contentBetweenLine: string };

const horizontalLine: FC<Props> = ({ contentBetweenLine }) => {
  return (
    <div>
      <hr className="mt-6 w-4/5 mx-auto" />
      <div className="flex items-center justify-center">
        <p className="bg-white text-center -mt-3 px-2">{contentBetweenLine}</p>
      </div>
    </div>
  );
};

export default horizontalLine;
