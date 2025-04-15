import React from "react";

const StatsList = ({ data, onEdit, onDelete }) => (
  <div className="mt-6">
    <h2 className="text-xl font-bold mb-2">Recent Health Statistics.</h2>
    {data.map((item) => (
      <div key={item.date} className="bg-white text-black p-4 rounded mb-2 flex justify-between items-center">
        <div>
          <p className="font-semibold">{item.desc}</p>
          <p>Calories Intake = {item.intake} &nbsp; Calories Burned = {item.burned}</p>
          <p className="text-orange-500 font-semibold">{item.date}</p>
        </div>
        <div className="space-x-2">
          <button onClick={() => onEdit(item)} className="bg-yellow-400 px-2 py-1 rounded">✏️</button>
          <button onClick={() => onDelete(item.date)} className="bg-red-500 text-white px-2 py-1 rounded">🗑️</button>
        </div>
      </div>
    ))}
  </div>
);

export default StatsList;