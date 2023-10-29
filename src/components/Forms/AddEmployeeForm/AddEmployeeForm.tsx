import { FormEvent, useState } from "react";
import Select from "../../inputs/Select/Select";
import TextInput from "../../inputs/TextInput/TextInput";
import NumberInput from "../../inputs/NumberInput/NumberInput";
import SubmitModal from "../../Modals/SubmitModal/SubmitModal";
import DatePicker from "react-datepicker";
import { states, department } from "../../../data/data";


export default function AddEmployeeForm() {
  const [inputsState, setInputsState] = useState({
    firstName: "",
    lastName: "",
    birthDate: new Date(),
    startDate: new Date(),
    street: "",
    city: "",
    state: "",
    zipCode: 94101,
    department: "",
  });

  const [showValidation, setShowValidation] = useState({
    firstName: false,
    lastName: false,
    birthDate: false,
    startDate: false,
    street: false,
    city: false,
    state: false,
    zipCode: false,
    department: false,
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (validation()) {
      console.log(inputsState);
    }
  }

  function validation() {
    const areValid = {
      firstName: false,
      lastName: false,
      birthDate: false,
      startDate: false,
      street: false,
      city: false,
      state: false,
      zipCode: false,
      department: false,
    };

    // const dateReg = /(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0,1,2])\/(19|20)\d{2}/gm;

    if (inputsState.firstName.length < 1 || inputsState.firstName.length > 64) {
      // Ci-dessous, on passe le state en argument car plusieurs modifications de state sont possible au cours de l'exécution de la fonction, ainsi chaque instruction modifiant le state utilisera le retour de l'instruction précédente.
      setShowValidation((state) => ({ ...state, firstName: true }));
    } else {
      areValid.firstName = true;
      setShowValidation((state) => ({ ...state, firstName: false }));
    }

    if (inputsState.lastName.length < 1 || inputsState.lastName.length > 64) {
      setShowValidation((state) => ({ ...state, lastName: true }));
    } else {
      areValid.lastName = true;
      setShowValidation((state) => ({ ...state, lastName: false }));
    }

    // if (inputsState.birthDate.match(dateReg)) {
    //   areValid.birthDate = true;
    //   setShowValidation((state) => ({ ...state, birthDate: false }));
    // } else {
    //   setShowValidation((state) => ({ ...state, birthDate: true }));
    // }

    // if (inputsState.startDate.match(dateReg)) {
    //   areValid.startDate = true;
    //   setShowValidation((state) => ({ ...state, startDate: false }));
    // } else {
    //   setShowValidation((state) => ({ ...state, startDate: true }));
    // }

    if (inputsState.street.length < 10) {
      setShowValidation((state) => ({ ...state, street: true }));
    } else {
      areValid.street = true;
      setShowValidation((state) => ({ ...state, street: false }));
    }

    if (inputsState.city.length < 3) {
      setShowValidation((state) => ({ ...state, city: true }));
    } else {
      areValid.city = true;
      setShowValidation((state) => ({ ...state, city: false }));
    }

    if (inputsState.zipCode.toString().length !== 5) {
      setShowValidation((state) => ({ ...state, zipCode: true }));
    } else {
      areValid.zipCode = true;
      setShowValidation((state) => ({ ...state, zipCode: false }));
    }

    if (inputsState.state === "") {
      setShowValidation((state) => ({ ...state, state: true }));
    } else {
      areValid.state = true;
      setShowValidation((state) => ({ ...state, state: false }));
    }

    if (inputsState.department === "") {
      setShowValidation((state) => ({ ...state, department: true }));
    } else {
      areValid.department = true;
      setShowValidation((state) => ({ ...state, department: false }));
    }

    console.log(inputsState);
    console.log(areValid);

    // Ici "Object.values" créé un tableau avec les valeurs d'un objet, et every vérifie que la callback passée renvoie bien true pour chaque index. True est renvoyé si c'est le cas. Sinon, c'est false.
    return Object.values(areValid).every((value) => value);
  }

  return (
    <form
      className="form"
      onSubmit={(e) => handleSubmit(e)}
      id="create-employee"
    >
      <fieldset>
        <legend>
          Identity<div className="hr"></div>
        </legend>

        <div className="form__container">
          <div className={`form__item  form__item--half ${showValidation.firstName ? "form__item--invalid" : ""}`}>
            <TextInput
              inputsState={inputsState}
              inputState="firstName"
              setInputsState={setInputsState}
              showValidation={showValidation.firstName}
              id="first-name"
              label="First Name"
              placeholder="John"
              validationMsg="3-64 caractères"
            />
          </div>

          <div className={`form__item  form__item--half ${showValidation.lastName ? "form__item--invalid" : ""}`}>
            <TextInput
              inputsState={inputsState}
              inputState="lastName"
              setInputsState={setInputsState}
              showValidation={showValidation.lastName}
              id="last-name"
              label="Last Name"
              placeholder="Doe"
              validationMsg="3-64 caractères"
            />
          </div>

          <div className={`form__item  form__item--half ${showValidation.birthDate ? "form__item--invalid" : ""}`}>
            <label htmlFor="birthDate">Birth Date</label>
            <DatePicker
              id="birthDate"
              selected={inputsState.birthDate}
              onChange={(value) => {
                if (value) setInputsState({ ...inputsState, birthDate: value });
              }}
            />
          </div>

          <div className={`form__item  form__item--half ${showValidation.startDate ? "form__item--invalid" : ""}`}>
            <label htmlFor="startDate">Start Date</label>
            <DatePicker
              id="startDate"
              selected={inputsState.startDate}
              onChange={(value) => {
                if (value) setInputsState({ ...inputsState, startDate: value });
              }}
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>
          Address<div className="hr"></div>
        </legend>

        <div className={`form__item ${showValidation.street ? "form__item--invalid" : ""}`}>
          <TextInput
            inputsState={inputsState}
            inputState="street"
            setInputsState={setInputsState}
            showValidation={showValidation.street}
            id="street"
            label="Street"
            placeholder="Vonnie Brown 1515 Applewood Road Baton"
            validationMsg="3-256 caractères"
          />
        </div>

        <div className="form__container">
          <div className={`form__item  form__item--third ${showValidation.city ? "form__item--invalid" : ""}`}>
            <TextInput
              inputsState={inputsState}
              inputState="city"
              setInputsState={setInputsState}
              showValidation={showValidation.city}
              id="city"
              label="City"
              placeholder="San Francisco"
              validationMsg="3-64 caractères"
            />
          </div>

          <div className={`form__item  form__item--third ${showValidation.state ? "form__item--invalid" : ""}`}>
            <Select
              inputsState={inputsState}
              inputState="state"
              setInputsState={setInputsState}
              showValidation={showValidation.state}
              id="state"
              label="State"
              placeholder="Choose"
              options={states}
              validationMsg="Choisir une option"
            />
          </div>

          <div className={`form__item  form__item--third ${showValidation.state ? "form__item--invalid" : ""}`}>
            <NumberInput
              inputsState={inputsState}
              inputState="zipCode"
              setInputsState={setInputsState}
              showValidation={showValidation.zipCode}
              id="zip-code"
              label="Zip&nbsp;Code"
              placeholder="75000"
              validationMsg="00000"
            />
          </div>
        </div>
      </fieldset>

      <div className="form__container">
        <div className={`form__item form__last-item  ${showValidation.department ? "form__item--invalid" : ""}`}>
          <Select
            inputsState={inputsState}
            inputState="department"
            setInputsState={setInputsState}
            showValidation={showValidation.department}
            id="department"
            label="Department"
            placeholder="Choose"
            options={department}
            validationMsg="Choisir une option"
          />
        </div>
      </div>

      <SubmitModal
        btnText="Save"
        mdlText="Employee created !"
        validation={validation}
        inputsState={inputsState}
      />
    </form>
  );
}
