import {createConnection} from "typeorm";

try{
  createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'eco123',
    database: 'project-getstarted',
    entities: [
      __dirname + '/../entity/*.ts'
    ],
    synchronize: true,
    logging: false
  })
}catch(err) {
  console.log(err)
};
