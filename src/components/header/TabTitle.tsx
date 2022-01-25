import { FC } from "react";

type Props = { title: string };

const TabTitle: FC<Props> = ({ title }) => {
  return (
    <h1 className="md:block hidden hover:block peer-hover:block transition-all">
      {title}
    </h1>
  );
};

export default TabTitle;
