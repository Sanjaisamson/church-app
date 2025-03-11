import { Model, DataTypes } from "sequelize";
import db from "../db";
import { UUID } from "crypto";

class RefreshToken extends Model {
  public id!: UUID;
  public userId!: UUID;
  public refreshToken!: string;
}

RefreshToken.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db.sequelize, // Pass the Sequelize instance
    tableName: "refreshTokens",
  }
);

// If associations are needed, define them here
export { RefreshToken };
