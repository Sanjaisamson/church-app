import { type QueryInterface, DataTypes, Sequelize } from "sequelize";
import db from "../db";
import { prepareMigrationFunction } from "../../utils/migration.utils";
const sequelize = db.sequelize;

export const up = prepareMigrationFunction(
  async (queryInterface: QueryInterface): Promise<void> => {
    {
      await sequelize
        .getQueryInterface()
        .renameColumn("users", "name", "firstName");
      await sequelize.getQueryInterface().addColumn("users", "lastName", {
        type: DataTypes.STRING,
        allowNull: true,
      });
      await sequelize.getQueryInterface().addColumn("users", "phoneNumber", {
        type: DataTypes.STRING,
        allowNull: false,
      });
    }
  }
);
export const down = async (queryInterface: QueryInterface): Promise<void> => {
  await sequelize
    .getQueryInterface()
    .renameColumn("users", "firstName", "name");
  await sequelize.getQueryInterface().removeColumn("users", "lastName");
  await sequelize.getQueryInterface().removeColumn("users", "phoneNumber");
};
