import {postAdd} from "./controller/PostAdd";
import {postGetAll} from "./controller/PostGetAll";
import {postGetById} from "./controller/PostGetById";
import {userAdd} from "./controller/UserAdd";

export const AppRouets = [
  {
    path: "/posts",
    method: "get",
    action: postGetAll
  },
  {
    path: "/posts/:id",
    method: "get",
    action: postGetById
  },
  {
    path: "/posts",
    method: "post",
    action: postAdd
  },
  {
    path: "/user",
    method: "post",
    action: userAdd
  }
];
