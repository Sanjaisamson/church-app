"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const TextField_1 = require("../components/TextField");
const validation_constants_1 = require("@/constants/validation.constants");
const PasswordInputFeild_1 = require("@/components/PasswordInputFeild");
const LoginForm = ({ errors, register, isLoading }) => {
    return (<react_1.VStack w="100%" rowGap={'6'}>
			<TextField_1.TextField name="email" label="Email" type="email" register={register} validation={{
            required: 'Email is required',
            pattern: {
                value: validation_constants_1.EMAIL_REGEX,
                message: validation_constants_1.EMAIL_ERROR_MESSAGE,
            },
        }} error={errors.email}/>

			<PasswordInputFeild_1.PasswordInputField name="password" label="Password" type="password" register={register} validation={{ required: 'Password is required' }} error={errors.password}/>
			<react_1.HStack>
				<react_1.Button variant="link" colorScheme={'brand'}>
					Forgot password?
				</react_1.Button>
			</react_1.HStack>

			<react_1.Button type="submit" minW="200px" disabled={!!Object.keys(errors).length} colorScheme="brand" isLoading={isLoading}>
				{isLoading ? 'Loading...' : 'Login'}
			</react_1.Button>
			{/* {isForgetPwdModal && <ForgetPassword isOpen={isForgetPwdModal} onClose={onPForgetPwdModalClose} />} */}
		</react_1.VStack>);
};
exports.default = LoginForm;
