import * as React from "react";
import BranchNode, { BranchNodeProps } from "./BranchNode";

interface BranchProps {
  data: BranchNodeProps["item"][];
  selected: boolean;
}

const Branch: React.FC<BranchProps> = ({ selected, data }) => {
  return (
    <div className="space-y-4">
      {data.map((item, i) => (
        <BranchNode key={i} selected={selected} item={item} />
      ))}
    </div>
  );
};

export default Branch;
// branch basically is a list of branch nodes that are rendered
