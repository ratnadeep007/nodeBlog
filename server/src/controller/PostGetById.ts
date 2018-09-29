import {Request,Response} from "express";
import {getManager} from "typeorm";
import {Post} from "../entity/Post";

export async function postGetById(req: Request, response: Response) {
  const postRepo = getManager().getRepository(Post);
  const posts = await postRepo.findByIds(req.params.id);
  response.send(posts);
}