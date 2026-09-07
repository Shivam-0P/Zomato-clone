# FROM node:20-alpine
#  COPY ./backend .

#  CMD ["node","src/server.js"]

FROM node:20-alpine AS frontend-builder

COPY ./frontend /src

WORKDIR /src

RUN npm install 
RUN npm run build

FROM node:20-alpine

WORKDIR /backend/src

COPY ./backend .



RUN npm install

COPY --from=frontend-builder /src/dist ./public

CMD ["node","src/server.js"]