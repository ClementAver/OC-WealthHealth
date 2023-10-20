import { Props } from "../inputs";

export default function NumberInput({ inputsState, inputState, setInputsState, showValidation, id, label, validationMsg }: Props) {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        id={id}
        value={inputsState[inputState as keyof typeof inputsState]}
        onChange={(e) => setInputsState({ ...inputsState, [inputState]: e.target.value })}
      />
      {showValidation && <p className="invalid">{validationMsg}</p>}
    </div>
  );
}
