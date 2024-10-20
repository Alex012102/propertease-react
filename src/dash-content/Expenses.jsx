import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import sampleReceipts from "../samples/sampleReceipts"; // Updated import path

const Expenses = () => {
  // Calculate total expenses per category
  const categoryTotals = sampleReceipts.reduce((acc, receipt) => {
    const { category, amount } = receipt;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += amount;
    return acc;
  }, {});

  // Convert the category totals object to an array
  const data = Object.entries(categoryTotals).map(([category, total]) => ({
    category,
    total,
  }));

  return (
    <div className="container" style={{height: '24.5rem'}}>
      <h2></h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="var(--bs-primary)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Expenses;
