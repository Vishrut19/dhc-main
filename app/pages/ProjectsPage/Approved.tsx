import React, { FC } from "react";
import ProjectItem from "./ProjectItem";
type Props = {
  items: any;
};
const Approved: FC<Props> = ({ items }) => {
  return (
    <div className="project__wrapper">
      {items.map((el: any, index: number) => (
        <ProjectItem
          type="default"
          el={el}
          key={index}
          showSwitches={true}
        ></ProjectItem>
      ))}
    </div>
  );
};

export default Approved;
