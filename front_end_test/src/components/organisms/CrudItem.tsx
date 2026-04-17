"use client";

import { Item } from "../../types/item.type";

type Props = {
  item: Item;
  onEdit: (item: Item) => void;
  onDelete: (id: string) => void;
};

export default function CrudItem({ item, onEdit, onDelete }: Props) {
  return (
    <li className="flex justify-between items-center border-b py-2">
  <span>{item.name}</span>

  <div className="flex gap-2">
    <button
      className="button-secondary"
      onClick={() => onEdit(item)}
    >
      Editar
    </button>

    <button
      className="button-danger"
      onClick={() => onDelete(item.id)}
    >
      Excluir
    </button>
  </div>
</li>
  );
}