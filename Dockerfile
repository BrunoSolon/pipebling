FROM node:12-alpine AS builder

# Create app directory
RUN mkdir -p /usr/src/app

# Install app dependencies
WORKDIR /usr/src/app
COPY package*.json .babelrc ./
RUN npm install --production && npm cache clean --force

COPY . .

CMD ["npm","prepublish"]

## -----

FROM builder AS release

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3020

CMD ["npm", "start"]
