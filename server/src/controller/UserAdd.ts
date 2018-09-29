import {Request,Response} from "express";
import {getManager} from "typeorm";
import {User} from "../entity/User";

export async function userAdd(req: Request, response: Response) {
  const userRepo = getManager().getRepository(User);
  const newUser = userRepo.create(req.body);
  await userRepo.save(newUser);
  response.send(newUser);
}