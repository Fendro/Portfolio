# Build Stage
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./

RUN npm install

# Copy the rest of the application code to the container
COPY . .

RUN npm run build

# Runtime Stage
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "main.js"]