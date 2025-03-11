import { type QueryInterface, DataTypes } from "sequelize";
import db from "../db";
import { prepareMigrationFunction } from "../../utils/migration.utils";
const sequelize = db.sequelize;

export const up = prepareMigrationFunction(
  async (queryInterface: QueryInterface): Promise<void> => {
    await sequelize.getQueryInterface().addColumn("users", "userRole", {
      type: DataTypes.STRING,
      allowNull: false,
    });
    await sequelize.getQueryInterface().changeColumn("users", "phoneNumber", {
      type: DataTypes.STRING,
      allowNull: false, // change to allow null false
    });
  }
);
export const down = async (queryInterface: QueryInterface): Promise<void> => {
  await sequelize.getQueryInterface().removeColumn("users", "userRole");
  await sequelize.getQueryInterface().changeColumn("users", "phoneNumber", {
    type: DataTypes.STRING,
    allowNull: true, // revert change
  });
};
