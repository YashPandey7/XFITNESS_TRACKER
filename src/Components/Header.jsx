import React from "react";

const Header = ({ onAdd }) => (
  <div className="text-center">
    <h1 className="text-3xl font-bold">Health And Fitness Tracker</h1>
    <div className="mt-4 p-4 bg-gray-800 rounded-md">
      <h2 className="text-xl mb-2">Update Today's Data</h2>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={onAdd}
      >
        + Add data
      </button>
    </div>
  </div>
);

export default Header;