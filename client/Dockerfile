FROM node:latest

COPY . /schwifty

WORKDIR /schwifty

RUN npm install

ENV PORT 3000
ENV NODE_ENV dev

EXPOSE 3000

CMD ["npm", "run", "both"]