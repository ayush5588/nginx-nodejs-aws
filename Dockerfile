FROM node:12-alpine3.10
WORKDIR /usr/src/app    
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "node", "index.js" ]