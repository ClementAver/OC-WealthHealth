import { SelectProps, Option } from "../inputs";

export default function Select({ inputsState, inputState, setInputsState, showValidation, id, label, placeholder, options, validationMsg }: SelectProps) {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <select
        name={id}
        id={id}
        value={inputsState[inputState as keyof typeof inputsState]}
        onChange={(e) => setInputsState({ ...inputsState, [inputState]: e.target.value })}
      >
        <option value="">{placeholder}</option>
        {options.map((option: Option, index: number) => (
          <option
            key={index}
            value={option.value}
          >
            {option.labor}
          </option>
        ))}
      </select>
      {showValidation && <p className="invalid">{validationMsg}</p>}
    </div>
  );
}
