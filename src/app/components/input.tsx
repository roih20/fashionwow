interface Props {
  classname?: string,
  type: string,
  name: string,
  labelName: string,
  value?: string,
  onChange?: () => void,
}


export default function Input({ classname, type, name, labelName, value, onChange }: Props) {
  return (
    <label className={`block mb-2.5`}>
      <span className="block">{labelName}</span>
      <input
        type={type} 
        name={name}
        value={value}
        onChange={onChange}
        className={`border border-black w-full mt-2 ${classname}`}
        required
      />
    </label>
  );
}
