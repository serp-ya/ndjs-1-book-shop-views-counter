import { Router } from 'express';
import { getCounter, incrementCounter } from '@/database';
import { ROUTES_BASE } from '@/routes';
export const counterRoute = Router();

counterRoute.get(`${ROUTES_BASE}:id/incr`, (req, res) => {
    const { id } = req.params;
    const counter = getCounter(id);

    res.json(counter);
});

counterRoute.post(`${ROUTES_BASE}:id`, (req, res) => {
    const { id } = req.params;
    const counter = incrementCounter(id);

    res.json(counter);
});