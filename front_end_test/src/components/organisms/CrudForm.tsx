"use client";

import { useState, useEffect } from "react";

type Props = {
  onSubmit: (name: string) => void;
  editingItem?: { id: string; name: string } | null;
};

export default function CrudForm({ onSubmit, editingItem }: Props) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
    }
  }, [editingItem]);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
      />

      <button
        onClick={() => {
          onSubmit(name);
          setName("");
        }}
      >
        {editingItem ? "Atualizar" : "Criar"}
      </button>
    </div>
  );
}