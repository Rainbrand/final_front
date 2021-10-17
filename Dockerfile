FROM node:alpine

WORKDIR /usr/app/final_front

COPY . .

RUN yarn install

EXPOSE 3000
EXPOSE 9000

CMD ["yarn", "start"]
