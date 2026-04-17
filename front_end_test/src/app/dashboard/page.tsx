"use client";

import { useAuth } from "../../hooks/useAuth";
import DashboardChart from "../../components/organisms/DashBoardChart";

export default function DashboardPage() {
  useAuth();

  const items = [];

  const data = [
    { name: "Jan", total: 10 },
    { name: "Fev", total: 25 },
    { name: "Mar", total: 15 },
    { name: "Abr", total: 30 },
    { name: "Mai", total: 22 },
  ];

  return (
    <div className="container flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <p className="text-sm text-gray-500">Total de itens</p>
          <h2 className="text-2xl font-bold">{items.length}</h2>
        </div>

        <div className="card md:col-span-2">
          <DashboardChart data={data} />
        </div>
      </div>
    </div>

  );
}