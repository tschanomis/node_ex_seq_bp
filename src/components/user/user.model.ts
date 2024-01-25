import { DataTypes } from "sequelize";

import { sequelize } from "../../config/sequelize";

import { UserInterface } from "./user.interface";

const UserModel = sequelize.define<UserInterface>("User", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
});

export { UserModel };
