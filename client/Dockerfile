FROM node:latest

COPY . /schwiftyclient

WORKDIR /schwiftyclient

RUN npm install

ENV PORT 3000
ENV NODE_ENV dev

EXPOSE 3000

CMD ["npm", "start"]