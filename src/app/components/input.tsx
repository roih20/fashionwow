interface Props {
  type: string,
  name: string,
  labelName: string,
  value?: string,
  onChange?: () => void,
}


export default function Input({ type, name, labelName, value, onChange }: Props) {
  return (
    <label>
      <span className="text-base font-medium">{labelName}</span>
      <input
        type={type} 
        name={name}
        value={value}
        onChange={onChange}
        className="border border-black w-full mt-2 focus:outline-none rounded-xl px-3 py-2"
        required
      />
    </label>
  );
}
