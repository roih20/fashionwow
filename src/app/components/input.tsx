interface Props {
  type: string,
  name: string,
  labelName: string,
  style?: string;
  value?: string,
  error?: string
  onChange?: () => void,
}


export default function Input({ error, type, name, labelName, value, onChange, style }: Props) {
  return (
    <label className={`block ${style}`}>
      <span className="block text-sm font-medium text-slate-700">{labelName}</span>
      <input
        type={type} 
        name={name}
        value={value}
        onChange={onChange}
        className={`block border bg-white shadow-sm w-full mt-1 focus:outline-none focus:ring-1 rounded-md px-3 py-2 ${error ? 'focus:ring-pink-500 focus:border-pink-500 text-pink-600 border-pink-500' : 'focus:ring-blue-500 focus:border-blue-500 border-slate-400 text-slate-500'}`}
        required
      />
    </label>
  );
}
