import { Request, Response, NextFunction } from "express";
import { User } from '../models/user';
import { getUserById, getUsers } from "../services/users-service";

const getUsersController = async (req: Request, res: Response, next: NextFunction) => {
    let result = await getUsers(req, res);
    return result;
}

const getUserByIdController = async (req: Request, res: Response, next: NextFunction) => {
    let result = await getUserById(req, res);
    return result;
}

export default {
    getUsersController,
    getUserByIdController,
}