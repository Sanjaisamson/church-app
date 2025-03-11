import { UserMenuPermissionsConfig } from "./user.types";

export type LoginData = {
	email: string;
	password: string;
};
export type LoginApiResponse = {
	success: boolean;
	data: {
		accessToken?: string;
		session?: string;
		challengeName?: string;
		config: UserMenuPermissionsConfig;
	};
};
