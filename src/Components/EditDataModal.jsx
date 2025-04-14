import React, { useState } from "react";

const EditDataModal = ({ entry, onClose, onSubmit }) => {
  const [intake, setIntake] = useState(entry.intake);
  const [burned, setBurned] = useState(entry.burned);
  const [desc, setDesc] = useState(entry.desc);

  const handleSubmit = () => {
    onSubmit({ ...entry, intake: +intake, burned: +burned, desc });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white text-black rounded-xl p-6 w-full max-w-md z-50 shadow-lg">
        <h2 className="text-lg font-bold mb-2">Let's see what you want to change!</h2>
        <input type="date" className="w-full mb-2" value={entry.date} disabled />
        <input type="number" placeholder="Enter Today's Calorie Intake" className="w-full mb-2" value={intake} onChange={(e) => setIntake(e.target.value)} />
        <input type="number" placeholder="Enter Today's Calorie Burned" className="w-full mb-2" value={burned} onChange={(e) => setBurned(e.target.value)} />
        <input type="text" placeholder="Enter a short description" className="w-full mb-2" value={desc} onChange={(e) => setDesc(e.target.value)} />
        <button className="bg-blue-500 text-white w-full mb-1" onClick={handleSubmit}>Submit</button>
        <button className="bg-red-500 text-white w-full" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditDataModal;