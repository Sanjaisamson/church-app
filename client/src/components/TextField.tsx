import { UseFormRegister, FieldError, RegisterOptions, Path } from 'react-hook-form';
import { FormControl, FormErrorMessage, FormLabel, Input, InputProps } from '@chakra-ui/react';

interface TextFieldProps<TFormValues extends Record<string, unknown>> extends InputProps {
  label: string;
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  error?: FieldError;
  validation?: RegisterOptions<TFormValues, Path<TFormValues>>; // Updated this line
}

export const TextField = <TFormValues extends Record<string, unknown>>({
  label,
  name,
  register,
  error,
  validation,
  ...rest
}: TextFieldProps<TFormValues>) => {
  return (
    <FormControl isInvalid={!!error}>
			<FormLabel>{label}</FormLabel>
			<Input {...rest} {...register(name, validation)} />
			<FormErrorMessage>{error?.message}</FormErrorMessage>
		</FormControl>
  );
};