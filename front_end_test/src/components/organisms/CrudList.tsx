"use client";

import { Item } from "../../types/item.type";
import CrudItem from "./CrudItem";

type Props = {
  items: Item[];
  onEdit: (item: Item) => void;
  onDelete: (id: string) => void;
};

export default function CrudList({ items, onEdit, onDelete }: Props) {
  return (
    <ul>
      {items.map((item) => (
        <CrudItem
          key={item.id}
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}