FROM node:lts-alpine

RUN addgroup app && adduser -S -G app app
RUN mkdir /app && chown app:app /app
USER app
WORKDIR /app

COPY --chown=app:app . .
RUN npm install
RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]
