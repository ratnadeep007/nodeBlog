import {Request,Response} from "express";
import {getManager} from "typeorm";
import {Post} from "../entity/Post";
import {User} from "../entity/User";

export async function postAdd(req: Request, response: Response) {
  const postRepo = getManager().getRepository(Post);
  const newPost = postRepo.create(req.body);
  try {
    await postRepo.save(newPost);
    response.send(newPost);
  } catch(err) {
    console.log(err);
    response.send("User not found");
  }
  // response.send(newPost);
}