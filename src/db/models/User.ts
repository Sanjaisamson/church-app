import { Model, DataTypes } from "sequelize";
import db from "../db";
import { UUID } from "crypto";

class User extends Model {
  public id!: UUID;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public password!: string;
  public phoneNumber!: string;
  public userRole!: string;
}

User.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userRole: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db.sequelize, // Pass the Sequelize instance
    tableName: "users",
  }
);

// If associations are needed, define them here
export { User };
