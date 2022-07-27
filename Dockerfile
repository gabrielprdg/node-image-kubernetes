FROM node:18-alpine
EXPOSE 3000
RUN mkdir /app
WORKDIR /app

COPY /package.json index.mjs /app/
ENTRYPOINT ["node", "index.mjs"]