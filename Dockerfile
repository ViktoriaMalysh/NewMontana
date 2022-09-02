FROM node:16.13.1 AS builder

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

FROM nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /home/node/app

COPY --from=builder /home/node/app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]