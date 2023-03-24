FROM node:18.15-alpine As development

WORKDIR /app

COPY package*.json ./

RUN npm install --only=development

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]


