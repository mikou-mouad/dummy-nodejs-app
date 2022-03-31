FROM node:16

WORKDIR /app

COPY package*.json .

RUN npm install express --save

COPY . .

EXPOSE 1313

CMD [ "node", "index.js" ]
