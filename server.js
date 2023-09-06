import 'dotenv/config';
import express from "express";
import cors from 'cors';

const app = express();

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Api Started Successfully in ${process.env.PORT}!`);
  }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.use(cors());