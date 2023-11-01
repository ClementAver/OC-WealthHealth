type State = { firstName: string; lastName: string; birthDate: Date; startDate: Date; street: string; city: string; state: string; zipCode: string; department: string };

type Setter = Dispatch<SetStateAction<{ firstName: string; lastName: string; birthDate: Date; startDate: Date; street: string; city: string; state: string; zipCode: string; department: string }>>;

export interface Option {
  value: string;
  labor: string;
}

export interface Props {
  id: string;
  label: string;
  inputsState: State;
  inputState: string;
  setInputsState: Setter;
  showValidation: boolean;
  validationMsg: string;
}

export interface TextProps extends Props {
  placeholder: string;
}

export type NumberProps = TextProps;

export interface SelectProps extends Props {
  placeholder: string;
  options: Option[];
}
