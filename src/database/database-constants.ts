import { MONGO_DB_ATLAS_PSW } from '@/env';

const DB_NAME = 'books';

export const DB_URL = (
    `mongodb+srv://book-man:${MONGO_DB_ATLAS_PSW}@cluster0.ibep9.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
);

export const DB_CONNECTION_CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
