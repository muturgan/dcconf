FROM node:12-alpine
RUN mkdir -p /node_app/dist
WORKDIR /node_app

# RUN npm i -g npm pm2

COPY . .
EXPOSE 3333
RUN npm i --quiet
# CMD ["npm", "start"]