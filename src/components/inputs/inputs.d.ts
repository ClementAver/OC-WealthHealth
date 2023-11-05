// type State = { firstName: string; lastName: string; birthDate: Date; startDate: Date; street: string; city: string; state: string; zipCode: string; department: string };

interface State {
  [name: string | Date];
}

type Setter = Dispatch<SetStateAction<{ [name: string | Date]: object }>>;

export interface Option {
  value: string;
  labor: string;
}

export interface Props<A, B> {
  id: string;
  label: string;
  inputsState: A;
  inputState: string;
  setInputsState: B;
  showValidation?: boolean;
  validationMsg?: string;
}

export interface TextProps<A, B> extends Props<A, B> {
  placeholder: string;
}

export type NumberProps<A, B> = TextProps<A, B>;

export interface SelectProps<A, B> extends Props<A, B> {
  placeholder: string;
  options: Option[];
}
