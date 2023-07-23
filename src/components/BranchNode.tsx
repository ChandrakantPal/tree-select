/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as React from "react";
import Branch from "./Branch";

export interface BranchNodeProps {
  item: {
    id: number;
    name: string;
    children: BranchNodeProps["item"][];
  };
  selected: boolean;
}

const BranchNode: React.FC<BranchNodeProps> = ({ selected, item }) => {
  const [checked, setChecked] = React.useState(() => selected);

  return (
    <div key={item.id} className="space-y-4">
      <label className="flex items-center gap-2 text-lg">
        <input
          name={item.name}
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />
        {item.name} - {item.children.length} items
      </label>
      {item.children && (
        <div className="ml-2">
          <Branch
            data={item.children}
            selected={checked}
            key={`${item.id}-${selected}-${checked}`}
          />
        </div>
      )}
    </div>
  );
};

export default BranchNode;
// branch node basically are the parent nodes that have children nodes
