// yarn generate-migration <migration-name>
const fs = require('fs');
const now = Date.now();
const prefix = `t${now}`;
const migrationName = process.argv[2];
const fileName = `${prefix}-${migrationName}.migration.ts`;
const path = `src/db/migrations/${fileName}`;

const template = `
import { type QueryInterface, DataTypes } from 'sequelize';
import db from '../db';
import { prepareMigrationFunction } from '../../utils/migration.utils';
const sequelize = db.sequelize;

export const up = prepareMigrationFunction(async (queryInterface: QueryInterface): Promise<void> => {});
export const down = async (queryInterface: QueryInterface): Promise<void> => {};
`;

fs.writeFileSync(path, template);
console.log(`Migration ${migrationName} created at ${path}`);
