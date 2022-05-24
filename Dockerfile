FROM node:lts

WORKDIR /app

EXPOSE 3000 35729
COPY ./*.json /app
COPY ./*.js /app
COPY ./src /app/src
COPY ./static /app/static
COPY ./blog /app/blog
COPY ./docs /app/docs
COPY ./i18n /app/i18n

RUN npm install

CMD ["npm", "start"]
