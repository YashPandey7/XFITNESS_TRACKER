import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const BarChartComponent = ({ data }) => {
  const last7Days = data.slice(-7);
  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-2">Weekly Health Trends:</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={last7Days}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="intake" fill="#a78bfa" name="calorieIntake" />
          <Bar dataKey="burned" fill="#6ee7b7" name="calorieBurned" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;