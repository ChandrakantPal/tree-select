/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as React from "react";
import Branch from "./components/Branch";

const treeData = [
  {
    id: 1,
    name: "Parent Node",
    children: [
      {
        id: 2,
        name: "Child Node 1",
        children: [
          { id: 3, name: "Grandchild Node 1", children: [] },
          { id: 4, name: "Grandchild Node 2", children: [] },
        ],
      },
      {
        id: 5,
        name: "Child Node 2",
        children: [
          { id: 6, name: "Grandchild Node 3", children: [] },
          { id: 7, name: "Grandchild Node 4", children: [] },
        ],
      },
    ],
  },
  // More nodes...
];

function App() {
  const [selectAll, setSelectAll] = React.useState(false);
  return (
    <div className="container min-h-screen p-6 mx-auto">
      <div className="mx-auto space-y-4 w-fit">
        <div className="flex items-center gap-4">
          <button
            className="text-green-500 border border-green-500 button hover:bg-green-500 hover:text-white"
            onClick={() => setSelectAll(true)}
          >
            Select All
          </button>
          <button
            className="text-red-500 border border-red-500 button hover:bg-red-500 hover:text-white"
            onClick={() => setSelectAll(false)}
          >
            Unselect All
          </button>
        </div>
        <Branch data={treeData} selected={selectAll} key={`${selectAll}-key`} />
      </div>
    </div>
  );
}

export default App;
// root of the tree
