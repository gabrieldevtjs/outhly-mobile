import {
  Controller,
  ControllerProps,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";
import { TextInput, TextInputProps } from "react-native";

type InputControllerProps = Omit<ControllerProps, "render"> & {
  children: (
    field: ControllerRenderProps<FieldValues, string>,
  ) => React.ReactElement;
};

type InputType = TextInputProps;

const InputController = ({
  name,
  control,
  children,
  ...rest
}: InputControllerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      {...rest}
      render={({ field }) => children(field)}
    />
  );
};

const Input = ({ ...rest }: InputType) => {
  return <TextInput {...rest} />
};

export { InputController, Input };
