import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import type { State } from "../../inputs/inputs";

export default function Modal({ btnText, mdlText, validation, inputsState }: { btnText: string; mdlText: string; validation: (a: State) => boolean; inputsState: State }) {
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
          if (validation(inputsState)) handleOpen();
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
