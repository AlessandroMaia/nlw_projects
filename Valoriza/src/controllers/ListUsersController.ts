import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";

class ListUsersController {
    async handle(req: Request, res: Response) {
        const listUsersServices = new ListUsersService();

        const users = await listUsersServices.execute()

        return res.json(users);
    }
}

export { ListUsersController }