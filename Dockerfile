FROM node:16-alpine3.11
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
CMD ["npm", "start"]
