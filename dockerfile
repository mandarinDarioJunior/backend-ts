FROM node:16

WORKDIR /usr/src/vibra-back

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333
EXPOSE 9229

CMD npm run dev 