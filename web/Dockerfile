FROM node:lts-alpine3.9
RUN mkdir -p /web
COPY ./web /web
WORKDIR /web
RUN npm i
CMD ["npm","start"]