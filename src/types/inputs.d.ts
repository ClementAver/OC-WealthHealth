interface State {
  [name: string | Date];
}

type Setter = Dispatch<SetStateAction<{ [name: string | Date | boolean]: object }>>;

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

export interface Option {
  value: string;
  labor: string;
}
