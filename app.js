
import express from "express";
import cors from 'cors';

const app = express();

app.listen(8080, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Api Started Successfully");
  }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.use(cors());