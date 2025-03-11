import { HStack, VStack, Button } from "@chakra-ui/react"
import { TextField } from "../components/TextField"
import { EMAIL_ERROR_MESSAGE, EMAIL_REGEX } from "@/constants/validation.constants"
import { Control, FieldErrors, UseFormRegister } from "react-hook-form"
import { LoginData } from "@/types/login.types"
import { PasswordInputField } from "@/components/PasswordInputFeild"

const LoginForm: React.FC<{
	control: Control<LoginData>;
	register: UseFormRegister<LoginData>;
	errors: FieldErrors<LoginData>;
	isLoading?: boolean;
}> = ({ errors, register, isLoading }) => {
  return (
    <VStack w="100%" rowGap={'6'}>
			<TextField
				name="email"
				label="Email"
				type="email"
				register={register}
				validation={{
					required: 'Email is required',
					pattern: {
						value: EMAIL_REGEX,
						message: EMAIL_ERROR_MESSAGE,
					},
				}}
				error={errors.email}
			/>

			<PasswordInputField
				name="password"
				label="Password"
				type="password"
				register={register}
				validation={{ required: 'Password is required' }}
				error={errors.password}
			/>
			<HStack>
				<Button variant="link" colorScheme={'brand'}>
					Forgot password?
				</Button>
			</HStack>

			<Button type="submit" minW="200px" disabled={!!Object.keys(errors).length} colorScheme="brand" isLoading={isLoading}>
				{isLoading ? 'Loading...' : 'Login'}
			</Button>
			{/* {isForgetPwdModal && <ForgetPassword isOpen={isForgetPwdModal} onClose={onPForgetPwdModalClose} />} */}
		</VStack>
  )
}

export default LoginForm