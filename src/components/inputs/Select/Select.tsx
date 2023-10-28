import { SelectProps, Option } from "../inputs";

export default function Select({ inputsState, inputState, setInputsState, showValidation, id, label, placeholder, options, validationMsg }: SelectProps) {
  return (
    <>
      {/* <label
        className="native-select__label"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        className="native-select native-select__select"
        name={id}
        id={id}
        value={inputsState[inputState as keyof typeof inputsState].toString()}
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
      {showValidation && <p className="native-select__invalid-msg invalid">{validationMsg}</p>} */}

      <div className="select">
        <span
          className="selectLabel"
          id={id}
        >
          {label}
        </span>
        <div className="selectWrapper">
          <select
            className="selectNative js-selectNative"
            aria-labelledby={id}
            name={id}
            value={inputsState[inputState as keyof typeof inputsState].toString()}
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

          {/* Hide the custom select from AT (e.g. SR) using aria-hidden */}
          <div
            className="selectCustom js-selectCustom"
            aria-hidden="true"
          >
            <div className="selectCustom-trigger">{placeholder}</div>
            <div className="selectCustom-options">
              {options.map((option: Option, index: number) => (
                <div
                  className="selectCustom-option"
                  key={index}
                  data-value={option.value}
                >
                  {option.labor}
                </div>
              ))}
            </div>
          </div>
          {showValidation && <p className="native-select__invalid-msg invalid">{validationMsg}</p>}
        </div>
      </div>
    </>
  );
}
