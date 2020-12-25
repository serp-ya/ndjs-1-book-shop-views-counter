FROM node:14-alpine

WORKDIR /app

COPY ./*.json ./
RUN npm install

COPY ./src ./src


CMD ["npm", "run", "start:watch"]