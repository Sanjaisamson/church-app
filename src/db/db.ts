import fs from 'fs';
import path from 'path';
import type { Model } from 'sequelize';
import { Sequelize } from 'sequelize';
import 'dotenv/config';

const dbPort = process.env.DBPORT ?? 5432;

interface sequelizeModel extends Model {
	name: any;
	associate?: (db: Record<string, sequelizeModel>) => void;
}

interface DbInstance {
	Sequelize: typeof Sequelize;
	sequelize: Sequelize;
	models: Record<string, sequelizeModel>;
}

const sequelize = new Sequelize({
	database: process.env.DBNAME ?? 'church_app_db',
	username: process.env.DBUSER ?? 'postgres',
	password: process.env.DBPASS ?? '1991',
	host: process.env.DBHOST ?? 'localhost',
	port: Number(dbPort),
	dialect: 'postgres',
	logging: false,
});

const db: DbInstance = {
	Sequelize,
	sequelize,
	models: {},
};

const models = path.join(__dirname, 'models');

void (async () => {
	for (const file of fs.readdirSync(models)) {
		if (file.indexOf('.') !== 0 && file.slice(-3) === '.ts') {
			const modelModule = await import(path.join(models, file));
			for (const modelName in modelModule) {
				const model: sequelizeModel = modelModule[modelName];
				db.models[model.name] = model;
			}
		}
	}

	Object.keys(db.models).forEach(function (modelName: string) {
		const model = db.models[modelName];
		if (model.associate) {
			model.associate(db.models);
		}
	});
})();

export default db;
