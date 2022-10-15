FROM node:16.17.1

ENV PORT 3000

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY ./ /usr/app/

RUN npm install

EXPOSE 3000

CMD "npm" "run" "dev"
