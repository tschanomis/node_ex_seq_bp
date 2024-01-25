import app from "./app";
import { sequelize } from "./config/sequelize";

const port = 3000;

sequelize
  .sync()
  .then(async () => {
    const tableExists = await sequelize.getQueryInterface().showAllTables();
    console.log(tableExists);
    app.listen(port, (): void => {
      return console.log(`Server listening at port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error init", error);
  });
