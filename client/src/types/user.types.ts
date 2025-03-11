import { UserRolePermissions } from "./role.types";

export type UserMenuData = {
	type: string;
	order: number;
	sub?: UserMenuData[];
};

export type UserMenuPermissionsConfig = {
	menu: UserMenuData[];
	timezone: string | null;
	countryCode: string | null;
	permissions: UserRolePermissions;
};

export type UserMenuPermissionsApiResponse = {
	success: boolean;
	data: UserMenuPermissionsConfig;
};