import express from 'express';
import { Worker } from 'node:worker_threads';

const app = express();
const port = process.env.PORT || 3000;

app.get('/non-blocking/', (res, rea) => {
  res.status(200).send('This page is non-blocking');
});

app.listen(port, () => {
  console.log('server listening on port' + port);
});
