import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import Select from "../../components/inputs/Select/Select";
import TextInput from "../../components/inputs/TextInput/TextInput";
import NumberInput from "../../components/inputs/NumberInput/NumberInput";
// import { useDispatch } from "react-redux";
// import { increment, decrement } from "../../features/counter/counter";
// import { useSelector } from "react-redux";
// import { RootState } from "../../utils/store";

export default function Home() {
  // const dispatch = useDispatch();
  // const counter = useSelector((state: RootState) => state.counter);

  const [inputsState, setInputsState] = useState({ firstName: "", lastName: "", birthDate: "", startDate: "", street: "", city: "", state: "", zipCode: 0, department: "" });
  const [showValidation, setShowValidation] = useState({ firstName: false, lastName: false, birthDate: false, startDate: false, street: false, city: false, state: false, zipCode: false, department: false });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (validationCheck()) {
      console.log(inputsState);
    }
  }

  function validationCheck() {
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

    const dateReg = /(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0,1,2])\/(19|20)\d{2}/gm;

    if (inputsState.firstName.length < 3 || inputsState.firstName.length > 64) {
      // Ci-dessous, on passe le state en argument car plusieurs modifications de state sont possible au cours de l'exécution de la fonction, ainsi chaque instruction modifiant le state utilisera le retour de l'instruction précédente.
      setShowValidation((state) => ({ ...state, firstName: true }));
    } else {
      areValid.firstName = true;
      setShowValidation((state) => ({ ...state, firstName: false }));
    }

    if (inputsState.lastName.length < 3 || inputsState.lastName.length > 64) {
      setShowValidation((state) => ({ ...state, lastName: true }));
    } else {
      areValid.lastName = true;
      setShowValidation((state) => ({ ...state, lastName: false }));
    }

    if (inputsState.birthDate.match(dateReg)) {
      areValid.birthDate = true;
      setShowValidation((state) => ({ ...state, birthDate: false }));
    } else {
      setShowValidation((state) => ({ ...state, birthDate: true }));
    }

    if (inputsState.startDate.match(dateReg)) {
      areValid.startDate = true;
      setShowValidation((state) => ({ ...state, startDate: false }));
    } else {
      setShowValidation((state) => ({ ...state, startDate: true }));
    }

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
    <div className="home">
      <h2>Create Employee</h2>

      <form
        onSubmit={(e) => handleSubmit(e)}
        id="create-employee"
      >
        <fieldset className="identity">
          <legend>Identity</legend>
          <TextInput
            inputsState={inputsState}
            inputState="firstName"
            setInputsState={setInputsState}
            showValidation={showValidation.firstName}
            id="first-name"
            label="First Name"
            placeholder="François"
            validationMsg="3-64 caractères"
          />

          <TextInput
            inputsState={inputsState}
            inputState="lastName"
            setInputsState={setInputsState}
            showValidation={showValidation.lastName}
            id="last-name"
            label="Last Name"
            placeholder="Dupont"
            validationMsg="3-64 caractères"
          />
        </fieldset>

        <fieldset>
          <legend>Address</legend>

          <TextInput
            inputsState={inputsState}
            inputState="street"
            setInputsState={setInputsState}
            showValidation={showValidation.street}
            id="street"
            label="Street"
            placeholder="24 rue Madeleine Brès"
            validationMsg="3-256 caractères"
          />
          <div>
            <TextInput
              inputsState={inputsState}
              inputState="city"
              setInputsState={setInputsState}
              showValidation={showValidation.city}
              id="city"
              label="City"
              placeholder="Paris"
              validationMsg="3-64 caractères"
            />

            <Select
              inputsState={inputsState}
              inputState="state"
              setInputsState={setInputsState}
              showValidation={showValidation.state}
              id="state"
              label="State"
              placeholder="Choisir"
              options={[
                { value: "france", labor: "France" },
                { value: "belgique", labor: "Belgique" },
              ]}
              validationMsg="Choisir une option"
            />

            <NumberInput
              inputsState={inputsState}
              inputState="zipCode"
              setInputsState={setInputsState}
              showValidation={showValidation.zipCode}
              id="zip-code"
              label="Zip Code"
              validationMsg="00000"
            />
          </div>
        </fieldset>

        <Select
          inputsState={inputsState}
          inputState="department"
          setInputsState={setInputsState}
          showValidation={showValidation.department}
          id="department"
          label="Department"
          placeholder="Choisir"
          options={[
            { value: "sales", labor: "Sales" },
            { value: "marketing", labor: "Marketing" },
            { value: "engineering", labor: "Engineering" },
            { value: "hr", labor: "Human Ressources" },
            { value: "legal", labor: "Legal" },
          ]}
          validationMsg="Choisir une option"
        />

        <button type="submit">Save</button>
      </form>

      <Link to="employee-list">View Current Employees</Link>
      {/* <button onClick={() => dispatch(increment())}>Increment</button>
        <p>{counter.value}</p>
        <button onClick={() => dispatch(decrement())}>Decrement</button> */}

      <div
        id="confirmation"
        className="modal"
      >
        Employee Created!
      </div>
    </div>
  );
}
