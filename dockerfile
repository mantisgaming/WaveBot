FROM node:current-alpine

WORKDIR /srv/wavebot

COPY package.json package.json
COPY build build

RUN npm install --omit=dev

CMD npm run start