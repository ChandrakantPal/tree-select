# Tree View Selector

This is a Tree View Selector project built with Vite, React, TypeScript, and Tailwind CSS. The Tree View Selector allows users to select and unselect nodes within a tree structure. The nodes are selectable via checkboxes, and users can select or unselect all nodes with dedicated buttons.

## Project Structure

- `BranchNode` - This component represents the individual nodes in the tree that may have children nodes. It maintains its own state for whether it is checked or not, which also impacts the state of its children nodes.
- `Branch` - This component is essentially a list of `BranchNode` components. It represents a level in the tree.
- `App` - This is the root component. It includes "Select All" and "Unselect All" buttons, and it renders the entire tree structure.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm/yarn.
- You have a basic understanding of React, TypeScript, and Tailwind CSS.

## Installation and Setup

1. Clone this repository to your local machine.

```bash
git clone https://github.com/ChandrakantPal/tree-select

cd tree-select
```

2. Install the project dependencies.

```bash
npm install
# or with yarn
yarn
```

3. Run the project.

```bash
npm run dev
# or with yarn
yarn dev
```

After running the command, the app will be available at [http://localhost:5173/](http://localhost:5173/).
