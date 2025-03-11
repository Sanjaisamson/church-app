import type { QueryInterface } from 'sequelize';

type MigrationFunction = (queryInterface: QueryInterface) => Promise<void>;

const prepareMigrationFunction = (migrationFunction: MigrationFunction): MigrationFunction => {
	const migration = async (queryInterface: QueryInterface): Promise<void> => {
		try {
			await migrationFunction(queryInterface);
		} catch (error : any) {
			console.error(`Error during migration: ${error.message as string}}`);
			if (error?.sql) {
				console.error(`${error?.original?.routine as string} - ${error.sql as string}`);
			}
		}
	};
	return migration;
};

export { prepareMigrationFunction };
