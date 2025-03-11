import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Input, InputProps, IconButton, InputGroup, FormControl, FormLabel, InputRightElement, FormErrorMessage } from "@chakra-ui/react";
import { useState } from "react";
import { UseFormRegister, FieldError, RegisterOptions, Path } from "react-hook-form";

interface PasswordFieldProps<TFormValues extends Record<string, unknown>> extends InputProps {
  label: string;
  name: Path<TFormValues>;
  type?: "text" | "password" | "hidden";
  register: UseFormRegister<TFormValues>;
  error?: FieldError;
  validation?: RegisterOptions<TFormValues, Path<TFormValues>>;
  placeholder?: string;
}

export const PasswordInputField = <TFormValues extends Record<string, unknown>>({
  label,
  name,
  register,
  error,
  validation,
  type,
  ...rest
}: PasswordFieldProps<TFormValues>) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl isInvalid={!!error}>
			{type !== 'hidden' ? <FormLabel>{label}</FormLabel> : <></>}
			<InputGroup size="md">
				<Input {...rest} type={show ? 'text' : 'password'} {...register(name, validation)} />
				<InputRightElement>
					<IconButton size={'sm'} aria-label="view" onClick={handleClick} colorScheme={'gray'}>
						{show ? <ViewOffIcon color="grey" /> : <ViewIcon color="grey" />}
					</IconButton>
				</InputRightElement>
			</InputGroup>
			{type !== 'hidden' ? <FormErrorMessage>{error?.message}</FormErrorMessage> : <></>}
		</FormControl>
  );
};