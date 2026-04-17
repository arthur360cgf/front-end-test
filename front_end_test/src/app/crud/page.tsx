"use client";

import { useState } from "react";
import { useCrudStore } from "../../store/crud.store";
import CrudForm from "../../components/organisms/CrudForm";
import CrudList from "../../components/organisms/CrudList";
import FilterBar from "../../components/organisms/FilterBar";
import Pagination from "../../components/organisms/Pagination";
import { Item } from "../../types/item.type";

export default function CrudPage() {
  const { items, addItem, deleteItem, updateItem } = useCrudStore();

  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const handleSubmit = (name: string) => {
    if (!name) return;

    if (editingItem) {
      updateItem(editingItem.id, name);
      setEditingItem(null);
    } else {
      addItem(name);
    }
  };

  const filteredItems = items.filter((item) => {
    const matchName = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchDate = date
      ? item.createdAt.startsWith(date)
      : true;

    return matchName && matchDate;
  });

  const start = (page - 1) * limit;
  const paginatedItems = filteredItems.slice(start, start + limit);

  return (
    <div className="container">
      <div className="container flex flex-col gap-6">
        <h1 className="text-2xl font-bold">CRUD</h1>

        <div className="card flex flex-col gap-4"></div>
        <CrudForm
          onSubmit={handleSubmit}
          editingItem={editingItem}
        />
      </div>
      <div className="card flex flex-col gap-4">
        <FilterBar
          search={search}
          setSearch={setSearch}
          setDate={setDate}
        />
      </div>
      <div className="card">
        <CrudList
          items={paginatedItems}
          onEdit={setEditingItem}
          onDelete={deleteItem}
        />
      </div>

      <div className="card">
        <Pagination
          page={page}
          setPage={setPage}
          limit={limit}
          setLimit={setLimit}
          total={filteredItems.length}
        />
      </div>
    </div>
  );
}