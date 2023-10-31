import { TextProps } from "../inputs";

export default function TextInput({ inputsState, inputState, setInputsState, showValidation, id, label, placeholder, validationMsg }: TextProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={inputsState[inputState as keyof typeof inputsState].toString()}
        placeholder={placeholder}
        onChange={(e) => setInputsState({ ...inputsState, [inputState]: e.target.value })}
      />
      {showValidation && <p className="invalid">{validationMsg}</p>}
    </>
  );
}