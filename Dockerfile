# syntax=docker/dockerfile:1
FROM node:14

WORKDIR /app

RUN apt-get -y update
RUN apt-get install -y ffmpeg
RUN npm install -g npm

COPY package*.json ./
RUN npm install

COPY . .

CMD ["node", "main.js"]
