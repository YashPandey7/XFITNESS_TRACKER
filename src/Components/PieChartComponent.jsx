import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const PieChartComponent = ({ data }) => {
  const totalIntake = data.reduce((sum, d) => sum + d.intake, 0);
  const totalBurned = data.reduce((sum, d) => sum + d.burned, 0);
  const chartData = [
    { name: "Intake", value: totalIntake },
    { name: "Burned", value: totalBurned },
  ];
  const COLORS = ["#a855f7", "#f97316"];

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-2">Overall Data:</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;