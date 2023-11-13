import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import type { Setter, State } from "../../../types/inputs";
import { useDispatch } from "react-redux";
import { add } from "../../../features/employees/employees";

export default function Modal({ btnText, mdlText, validation, inputsState, setInputsState, setShowValidation }: { btnText: string; mdlText: string; validation: (a: State) => boolean; inputsState: State; setInputsState: Setter; setShowValidation: Setter }) {
  /*
  Props :
    *a string representing the button text content;
    *a string representing the modal text content;
    *a test function;
    *a state reprensenting the values to be tested - object;
    *the above state setter, used here to empty the inputs if the validation passes;
    *a setter for the state responsible for displaying error messages,
     used here to manually swap them to false in order to hide those messages
     when validation passes and inputs are emptied.
  */

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  function handleOpen() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  const handleEchap = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClose);
    window.addEventListener("keydown", handleEchap);

    // Removes the listener when the component is dismounted.
    return () => {
      window.removeEventListener("click", handleClose);
      window.removeEventListener("keydown", handleEchap);
    };
  }, [handleEchap]);

  return (
    <>
      <button
        type="submit"
        className="button button__submit"
        onClick={(e) => {
          e.stopPropagation();
          // If validation passes
          if (validation(inputsState)) {
            // We update the redux state.
            dispatch(add(inputsState));

            // Sets the showValidation state properties on false (to hide the warnings messages on submit even if we empty the inputs)
            setShowValidation({ firstName: false, lastName: false, birthDate: false, startDate: false, street: false, city: false, state: false, zipCode: false, department: false });

            setInputsState({ firstName: "", lastName: "", birthDate: new Date(), startDate: new Date(), street: "", city: "", state: "", zipCode: "", department: "" });

            // Show the modal
            handleOpen();
          }
        }}
      >
        {btnText}
      </button>

      {showModal &&
        createPortal(
          <div className="modal__bg">
            <div
              className="modal"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="modal__icon__bg"></div>
              <svg
                onClick={handleClose}
                className="modal__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 512a256 256 0 100-512 256 256 0 100 512zm-81-337c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path>
              </svg>
              <span>{mdlText}</span>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
