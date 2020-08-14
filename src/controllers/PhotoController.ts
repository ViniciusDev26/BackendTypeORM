import {getConnection} from "typeorm";
import { Photo } from '../entity/Photo';

import {Request, Response} from 'express'

class PhotoController {
  async index(req: Request, res: Response) {
    const result = await getConnection().manager.find(Photo);
    res.json(result);
  }

  async create(req: Request, res: Response) {
    let photo = new Photo();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.views = 1;
    photo.isPublished = true;

    await getConnection().manager
      .save(photo)
      .then(photo => {
        console.log("Photo has been saved. Photo id is", photo.id);
      });
  }
}

export default new PhotoController();