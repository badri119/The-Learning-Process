FROM node:19-alpine

WORKDIR /usr/src/generator-frontend

COPY package*.json /usr/src/generator-frontend/

RUN npm install

COPY . /usr/src/generator-frontend/

EXPOSE 3000

CMD ["npm", "start"]