import { useEffect, useRef } from "react";
import { SelectProps, Option } from "../inputs";

export default function Select({ inputsState, inputState, setInputsState, showValidation, id, label, placeholder, options, validationMsg }: SelectProps) {
  // The main div for the native select element.
  const elSelectNative = useRef<HTMLSelectElement>(null);

  /*
  The main div for the custom select
  (We set the reference to null because the jsx isn't executed yet.
  We must also specify the expected type.)
  */
  const elSelectCustom = useRef<HTMLDivElement>(null);
  // The custom placeholder div.
  const elSelectCustomBox = useRef<HTMLDivElement>(null);
  // The custom container for the options.
  const elSelectCustomOpts = useRef<HTMLDivElement>(null);
  // The custom options elements.
  const customOptsList = useRef<HTMLDivElement[]>([]);
  // The total number of options.
  const optionsCount = Array.from(customOptsList.current).length;

  useEffect(() => {
    let optionChecked = "";
    let optionHoveredIndex = -1;

    // Toggle custom select visibility when clicking the box
    elSelectCustomBox.current?.addEventListener("click", () => {
      const isClosed = !elSelectCustom.current?.classList.contains("isActive");

      if (isClosed) {
        openSelectCustom();
      } else {
        closeSelectCustom();
      }
    });

    function openSelectCustom() {
      elSelectCustom.current?.classList.add("isActive");
      // Remove aria-hidden in case this was opened by a user
      // who uses AT (e.g. Screen Reader) and a mouse at the same time.
      elSelectCustom.current?.setAttribute("aria-hidden", "false");

      if (optionChecked) {
        const optionCheckedIndex = customOptsList.current.findIndex((el) => el.getAttribute("data-value") === optionChecked);
        updateCustomSelectHovered(optionCheckedIndex);
      }

      // Add related event listeners
      document.addEventListener("click", watchClickOutside);
      document.addEventListener("keydown", supportKeyboardNavigation);
    }

    function closeSelectCustom() {
      elSelectCustom.current?.classList.remove("isActive");

      elSelectCustom.current?.setAttribute("aria-hidden", "true");

      updateCustomSelectHovered(-1);

      // Remove related event listeners
      document.removeEventListener("click", watchClickOutside);
      document.removeEventListener("keydown", supportKeyboardNavigation);
    }

    function watchClickOutside(e: Event) {
      const didClickedOutside = !elSelectCustom.current?.contains(e.target as Node);
      if (didClickedOutside) {
        closeSelectCustom();
      }
    }

    function updateCustomSelectHovered(newIndex: number) {
      const prevOption = customOptsList.current[optionHoveredIndex];
      const option = customOptsList.current[newIndex];

      if (prevOption) {
        prevOption.classList.remove("isHover");
      }
      if (option) {
        option.classList.add("isHover");
      }

      optionHoveredIndex = newIndex;
    }

    function supportKeyboardNavigation(e: KeyboardEvent) {
      // press down -> go next
      if (e.key === "ArrowDown" && optionHoveredIndex < optionsCount - 1) {
        e.preventDefault(); // prevent page scrolling
        updateCustomSelectHovered(optionHoveredIndex + 1);
      }

      // press up -> go previous
      if (e.key === "ArrowUp" && optionHoveredIndex > 0) {
        e.preventDefault(); // prevent page scrolling
        updateCustomSelectHovered(optionHoveredIndex - 1);
      }

      // press Enter or space -> select the option
      if (e.key === "Enter" || e.key === "Space") {
        e.preventDefault();

        const option = customOptsList.current[optionHoveredIndex];
        const value = option && option.getAttribute("data-value");

        if (elSelectNative && elSelectNative.current && value) {
          elSelectNative.current.value = value;
          updateCustomSelectChecked(value, option.textContent as string);
        }
        closeSelectCustom();
      }

      function updateCustomSelectChecked(value: string, text: string) {
        const prevValue = optionChecked;

        const elPrevOption = findOption("data-value", prevValue);
        const elOption = findOption("data-value", value);

        if (elPrevOption) {
          elPrevOption.classList.remove("isActive");
        }

        if (elOption) {
          elOption.classList.add("isActive");
        }

        if (elSelectCustomBox && elSelectCustomBox.current) elSelectCustomBox.current.textContent = text;
        optionChecked = value;
      }

      // press ESC -> close selectCustom
      if (e.key === "Escape") {
        closeSelectCustom();
      }
    }

    function findOption(attrName: string, attrValue: string): HTMLDivElement | null {
      const option = customOptsList.current.find((el) => {
        const value = el.getAttribute(attrName);
        return value === attrValue;
      });

      return option || null;
    }
  }, [optionsCount]);

  return (
    <>
      <div className="select">
        <span
          className="selectLabel"
          id={id}
        >
          {label}
        </span>
        <div className="selectWrapper">
          <select
            ref={elSelectNative}
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
            ref={elSelectCustom}
            className="selectCustom js-selectCustom"
            aria-hidden="true"
          >
            <div
              ref={elSelectCustomBox}
              className="selectCustom-trigger"
            >
              {placeholder}
            </div>
            <div
              ref={elSelectCustomOpts}
              className="selectCustom-options"
            >
              {options.map((option: Option, index: number) => (
                <div
                  ref={(element) => element && customOptsList.current.push(element)}
                  className="selectCustom-option"
                  key={index}
                  data-value={option.value}
                  onClick={() => {
                    if (elSelectCustomBox && elSelectCustomBox.current) {
                      // Update custom select text too
                      elSelectCustomBox.current.textContent = option.labor;
                    }
                    if (elSelectCustom && elSelectCustom.current) {
                      // Close select
                      elSelectCustom.current.classList.remove("isActive");
                    }
                  }}
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
