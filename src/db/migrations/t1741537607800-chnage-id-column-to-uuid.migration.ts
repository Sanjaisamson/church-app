
import { type QueryInterface, DataTypes } from 'sequelize';
import db from '../db';
import { prepareMigrationFunction } from '../../utils/migration.utils';
const sequelize = db.sequelize;

export const up = prepareMigrationFunction(async (queryInterface: QueryInterface): Promise<void> => {
    await sequelize.getQueryInterface().changeColumn("users", "id", {
        type: DataTypes.UUIDV4 // change to UUID
      });
});
export const down = async (queryInterface: QueryInterface): Promise<void> => {
    await sequelize.getQueryInterface().changeColumn("users", "id", {
        type: DataTypes.INTEGER // revert change
      });
};
