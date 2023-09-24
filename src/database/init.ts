import db from ".";
import "./models";

(async () => {
  console.log("Starting db connection...");
  await db.authenticate();
  await db.sync({ alter: true });
  console.log("All models were synchronized successfully.");
})();
