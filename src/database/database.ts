import lowdb from 'lowdb';
import FileSync, { write } from 'lowdb/adapters/FileSync';
import { COUNTER_DEFAULT_VALUE, DB_PATH } from './database-constants';

const adapter = new FileSync(DB_PATH);
const db = lowdb(adapter);

export const getCounter = (counterId: string): number => (
    db.get(counterId).value() || COUNTER_DEFAULT_VALUE
);

export const incrementCounter = (counterId: string): number => {
    db.update(counterId, counter => (counter || COUNTER_DEFAULT_VALUE) + 1).write();
    return getCounter(counterId)
};
