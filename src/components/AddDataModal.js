import React, { useState } from "react";

const AddDataModal = ({ onClose, onSubmit }) => {
  const [date, setDate] = useState("");
  const [intake, setIntake] = useState("");
  const [burned, setBurned] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = () => {
    onSubmit({ date, intake: +intake, burned: +burned, desc });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white text-black p-4 rounded shadow w-80">
        <h2 className="text-lg font-bold mb-2">How Much Net Calories did you take Today?</h2>
        <input type="date" className="w-full mb-2" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="number" placeholder="Enter Today's Calorie Intake" className="w-full mb-2" value={intake} onChange={(e) => setIntake(e.target.value)} />
        <input type="number" placeholder="Enter Today's Calorie Burned" className="w-full mb-2" value={burned} onChange={(e) => setBurned(e.target.value)} />
        <input type="text" placeholder="Enter a short description" className="w-full mb-2" value={desc} onChange={(e) => setDesc(e.target.value)} />
        <button className="bg-blue-500 text-white w-full mb-1" type="submit" onClick={handleSubmit}>Submit</button>
        <button className="bg-red-500 text-white w-full" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddDataModal;