import { Request, Response } from "express";

import httpStatus from "http-status";

import {
  createUserInService,
  readInService,
  updateInService,
  deleteInService,
} from "./user.service";

import { UserInterface } from "./user.interface";

const createUser = async (req: Request, res: Response) => {
  try {
    const userData: UserInterface = req.body;
    const newUser: UserInterface = await createUserInService(userData);
    res.status(httpStatus.CREATED).send({ message: "Created", data: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};

const readUser = async (req: Request, res: Response) => {
  try {
    const userId: string = req.params.id;
    const userReading: UserInterface = await readInService(userId);
    res.status(httpStatus.OK).send({ message: "Read", data: userReading });
  } catch (error) {
    console.error("Error reading user:", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId: string = req.params.id;
    const userData: UserInterface = req.body;
    const userUpdating: boolean = await updateInService(userId, userData);
    res
      .status(httpStatus.OK)
      .send({ message: "User updated", data: userUpdating });
  } catch (error) {
    console.error("Error updating user:", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId: string = req.params.id;
    const userDeleting = await deleteInService(userId);
    res.status(httpStatus.ACCEPTED);
    res.send({ message: "Removed", data: userDeleting });
  } catch (error) {
    console.error("Error deleting user:", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};

export { createUser, readUser, updateUser, deleteUser };
