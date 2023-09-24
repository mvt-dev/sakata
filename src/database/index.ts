import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sakata", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
