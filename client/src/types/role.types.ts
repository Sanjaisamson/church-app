import { UserRole } from "@/constants/role.constants";

export type UserRolePermissions = {
	[key in UserRole]: boolean;
};