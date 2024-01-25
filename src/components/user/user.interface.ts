import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";

interface UserInterface
  extends Model<
    InferAttributes<UserInterface>,
    InferCreationAttributes<UserInterface>
  > {
  id: CreationOptional<number>;
  firstName: string;
  lastName: string;
  updatedAt: CreationOptional<Date>;
  createdAt: CreationOptional<Date>;
}

export { UserInterface };
