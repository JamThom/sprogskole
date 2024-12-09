import express from 'express';
import config from './schema/schema';
import { createHandler } from "graphql-http/lib/use/express";
import cors from 'cors';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));

app.all('/graphql', createHandler(config));

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});