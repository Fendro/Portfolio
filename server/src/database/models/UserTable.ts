import { DataTypes, Model, Sequelize } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

export class UserTable extends Model {}

UserTable.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "User", // We need to choose the model name
  },
);
