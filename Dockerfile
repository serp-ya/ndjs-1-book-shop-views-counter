FROM node:14-alpine

WORKDIR /app

COPY ./*.json ./
COPY ./src ./src

RUN npm install

CMD ["npm", "run", "start:watch"]