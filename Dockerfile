FROM node:19-alpine3.17 AS dev
WORKDIR /app
COPY package.json .
RUN yarn install
CMD ["yarn", "start:dev"]

FROM node:19-alpine3.17 AS dev-deps
WORKDIR /app
COPY package.json .
RUN yarn install --frozen-lockfile

FROM node:19-alpine3.17 AS builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:19-alpine3.17 AS prod-deps
WORKDIR /app
COPY package.json .
RUN yarn install --omit=dev --frozen-lockfile

FROM node:19-alpine3.17 AS prod
EXPOSE 8000
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
CMD [ "node", "dist/app.js" ]