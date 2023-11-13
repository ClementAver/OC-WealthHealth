import type { NumberProps, State, Setter } from "../../../types/inputs";

export default function NumberInput({ inputsState, inputState, setInputsState, showValidation, id, label, placeholder, validationMsg }: NumberProps<State, Setter>) {
  /*
    This is a controlled input component.

    props :
      *a state - object;
      *a string representing the state property which will be assigned;
      *a setter used to do the above;
      *a boolean to know whenever the warning message should be displayed or not;
      *an id;
      *a label;
      *a placeholder string;
      *a string representing the warning message.
  */

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        placeholder={placeholder}
        type="number"
        id={id}
        value={inputsState[inputState as keyof typeof inputsState]}
        onChange={(e) => setInputsState({ ...inputsState, [inputState]: e.target.value })}
      />
      {showValidation && <p className="invalid">{validationMsg}</p>}
    </>
  );
}
