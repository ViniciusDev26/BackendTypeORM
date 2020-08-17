import {getConnection, getRepository} from "typeorm";
import { Photo } from '../entity/Photo';

import {Request, Response} from 'express'

class PhotoController {
  async index(req: Request, res: Response) {
    const result = await getRepository(Photo).find();
    res.json(result);
  }

  async create(req: Request, res: Response) {
    const photo = new Photo();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.views = 1;
    photo.isPublished = true;

    await getRepository(Photo)
      .save(photo)
      .then(() => {
        res.status(201).send();
      });
  }
}

export default new PhotoController();