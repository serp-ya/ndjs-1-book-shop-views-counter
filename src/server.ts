import express from 'express';
import cors from 'cors';
import { COUNTER_ROUTE_NAME, counterRoute } from './routes/counter';

export const server = express();

server.use(cors());

server.use(`/${COUNTER_ROUTE_NAME}`, counterRoute);
