"use client";

type Props = {
  search: string;
  setSearch: (v: string) => void;
  setDate: (v: string) => void;
};

export default function FilterBar({ search, setSearch, setDate }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <input
        className="input"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <input
        className="input"
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
}