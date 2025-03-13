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
      type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
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
