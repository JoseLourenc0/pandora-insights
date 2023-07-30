FROM node:18.17.0-slim AS development

WORKDIR /code

COPY . /code

RUN npm install

CMD ["npm", "run", "dev"]

EXPOSE 3000
