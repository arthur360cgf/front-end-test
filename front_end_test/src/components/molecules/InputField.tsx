import Input from "../atoms/Input";

type Props = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputField({ label, error, ...props }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm">{label}</label>
      <Input {...props} />
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
}