# syntax=docker/dockerfile:1
FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN apt-get -y update
RUN apt-get install -y ffmpeg

EXPOSE 3000
CMD ["node", "main.js"]
