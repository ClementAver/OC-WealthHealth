import type { NumberProps } from "../inputs";

export default function NumberInput({ inputsState, inputState, setInputsState, showValidation, id, label, placeholder, validationMsg }: NumberProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        placeholder={placeholder}
        type="number"
        id={id}
        value={inputsState[inputState as keyof typeof inputsState].toString()}
        onChange={(e) => setInputsState({ ...inputsState, [inputState]: e.target.value })}
      />
      {showValidation && <p className="invalid">{validationMsg}</p>}
    </>
  );
}
