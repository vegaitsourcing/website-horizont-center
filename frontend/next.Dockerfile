FROM node:16.17.1
# FROM node:alpine

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY ./ /usr/app/
# Installing dependencies
RUN npm install

EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"
