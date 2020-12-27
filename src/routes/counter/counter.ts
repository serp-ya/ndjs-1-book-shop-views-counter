import { Router } from 'express';
import { getCounter, incrementCounter } from '@/database/counter';
import { ROUTES_BASE } from '../routes-constants';
import { EStatusCodes } from '../routes-enums';

export const counterRoute = Router();

counterRoute.get(`${ROUTES_BASE}:id/incr`, (req, res) => {
    const { id } = req.params;
    
    getCounter(id)
        .then(counter => res.json(counter))
        .catch(error => res.status(EStatusCodes.InternalError).json(error));
});

counterRoute.post(`${ROUTES_BASE}:id`, (req, res) => {
    const { id } = req.params;
    
    incrementCounter(id)
        .then(counter => res.json(counter))
        .catch(error => res.status(EStatusCodes.InternalError).json(error));
});
