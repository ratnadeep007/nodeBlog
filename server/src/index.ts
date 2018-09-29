import {createConnection} from "typeorm";
import {Request, Response} from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import { AppRouets } from "./routes";

createConnection().then(async connection => {
  const app = express();
  app.use(bodyParser.json());
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  AppRouets.forEach(route => {
    app[route.method](route.path, (req: Request, res: Response, next: Function) => {
      route.action(req, res)
        .then(() => next)
        .catch(err => next(err));
    });
  });

  app.listen(5000);
}).catch(error => console.log("Typeorm: ", error));
