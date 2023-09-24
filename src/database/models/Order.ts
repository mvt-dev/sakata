import { Sequelize, DataTypes } from "sequelize";
import db from "..";

export const Order = db.define(
  "order",
  {
    stock: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
    },
    open: {
      type: DataTypes.FLOAT,
    },
    close: {
      type: DataTypes.FLOAT,
    },
    min: {
      type: DataTypes.FLOAT,
    },
    max: {
      type: DataTypes.FLOAT,
    },
    volume: {
      type: DataTypes.FLOAT,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    indexes: [
      {
        fields: ["stock", "date"],
      },
    ],
  }
);
