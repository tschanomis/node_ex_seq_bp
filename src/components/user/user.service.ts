import { UserModel } from "./user.model";

import { UserInterface } from "./user.interface";

const createUserInService = async (
  user: UserInterface
): Promise<UserInterface> => {
  try {
    const newUser: UserInterface = await UserModel.create(user);
    console.log(newUser);
    return newUser;
  } catch (error) {
    console.error("DB Error creating user:", error);
    throw error;
  }
};

const readInService = async (id: string): Promise<UserInterface> => {
  try {
    const user: UserInterface = await UserModel.findByPk(id);
    console.log(user);
    return user;
  } catch (error) {
    console.error("DB Error reading user:", error);
    throw error;
  }
};

const updateInService = async (
  userId: string,
  userData: UserInterface
): Promise<boolean> => {
  try {
    const updatedUser = await UserModel.update(userData, {
      where: { id: userId },
    });
    console.log(updatedUser);
    const updateCondition: boolean = updatedUser[0] === 1;
    if (!updateCondition) throw new Error("User not found");
    return updateCondition;
  } catch (error) {
    console.error("DB Error updating user:", error);
    throw error;
  }
};

const deleteInService = async (id: string): Promise<boolean> => {
  try {
    const deletedUser = await UserModel.destroy({ where: { id: id } });
    console.log(deletedUser);
    if (deletedUser === 0) throw new Error("User not found");
    return true;
  } catch (error) {
    console.error("DB Error deleting user:", error);
    throw error;
  }
};

export { createUserInService, readInService, updateInService, deleteInService };
