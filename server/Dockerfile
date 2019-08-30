FROM node:latest

COPY . /schwiftyserver

WORKDIR /schwiftyserver

RUN npm install

ENV PORT 7000
ENV NODE_ENV dev

EXPOSE 7000

CMD ["npm", "start"]