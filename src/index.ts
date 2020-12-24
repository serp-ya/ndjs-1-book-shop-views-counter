import { server } from './server';
import { APP_DEFAULT_PORT } from './constants';

const APP_PORT = process.env.PORT || APP_DEFAULT_PORT;

server.listen(APP_PORT, () => {
    process.stdout.write(`Server started on ${APP_PORT} port!\n`);
});