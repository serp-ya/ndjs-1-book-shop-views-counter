import { server } from './server';
import { APP_DEFAULT_PORT } from './constants';
import { dbConnect } from './database';
import { PORT } from './env';

const APP_PORT = PORT || APP_DEFAULT_PORT;

dbConnect
    .then(() => {
        server.listen(APP_PORT, () => {
            process.stdout.write(`Server started on ${APP_PORT} port!\n`);
        });
    })
    .catch(error => process.stdout.write(JSON.stringify(error)));