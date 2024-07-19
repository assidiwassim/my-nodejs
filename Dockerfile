FROM --platform=linux/amd64 node:18

WORKDIR /my-workspace 

COPY package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 3000

CMD [ "npm","start" ]