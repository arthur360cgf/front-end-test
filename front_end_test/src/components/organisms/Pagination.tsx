"use client";

type Props = {
  page: number;
  setPage: (v: number) => void;
  limit: number;
  setLimit: (v: number) => void;
  total: number;
};

export default function Pagination({
  page,
  setPage,
  limit,
  setLimit,
  total,
}: Props) {
  const start = (page - 1) * limit;

  return (
    <div className="flex justify-between items-center mt-4">
      <select className="input w-24" onChange={(e) => setLimit(Number(e.target.value))}>
        <option value={6}>6</option>
        <option value={12}>12</option>
        <option value={24}>24</option>
      </select>
      <div className="flex gap-2">
      <button className="button-secondary" disabled={page === 1} onClick={() => setPage(page - 1)}>
        Anterior
      </button>
      </div>

      <button className="button-secondary"
        disabled={start + limit >= total}
        onClick={() => setPage(page + 1)}
      >
        Próximo
      </button>
    </div>
  );
}