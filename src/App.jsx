import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddDataModal from "./components/AddDataModal";
import EditDataModal from "./components/EditDataModal";
import StatsList from "./components/StatsList";
import BarChartComponent from "./components/BarChartComponent";
import PieChartComponent from "./components/PieChartComponent";
import { getDataFromStorage, saveDataToStorage } from "./utils/localStorageUtils";

function App() {
  const [healthData, setHealthData] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    const storedData = getDataFromStorage();
    setHealthData(storedData);
  }, []);

  useEffect(() => {
    saveDataToStorage(healthData);
  }, [healthData]);

  const addEntry = (entry) => {
    setHealthData([...healthData, entry]);
  };

  const updateEntry = (updated) => {
    const newData = healthData.map((item) =>
      item.date === updated.date ? updated : item
    );
    setHealthData(newData);
  };

  const deleteEntry = (date) => {
    const newData = healthData.filter((item) => item.date !== date);
    setHealthData(newData);
  };

  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 6);

  const weeklyData = healthData.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= sevenDaysAgo && itemDate <= today;
  });


  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <Header onAdd={() => setShowAddModal(true)} />

      {showAddModal && (
        <AddDataModal
          onClose={() => setShowAddModal(false)}
          onSubmit={addEntry}
        />
      )}

      {editItem && (
        <EditDataModal
          entry={editItem}
          onClose={() => setEditItem(null)}
          onSubmit={updateEntry}
        />
      )}

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div>
          {weeklyData.length > 0 && (
            <BarChartComponent data={healthData} />
          )}
        </div>
        <div>
          <PieChartComponent data={healthData} />
        </div>
      </div>

      <StatsList
        data={healthData}
        onEdit={setEditItem}
        onDelete={deleteEntry}
      />
    </div>
  );
}

export default App;