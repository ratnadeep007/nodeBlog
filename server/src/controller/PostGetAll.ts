import {Request,Response} from "express";
import {getManager} from "typeorm";
import {Post} from "../entity/Post";
import {User} from "../entity/User";

export async function postGetAll(req: Request, response: Response) {
  const postRepo = getManager().getRepository(Post);
  const userRepo = getManager().getRepository(User);
  const posts = await postRepo.find();
  response.send(posts);
}