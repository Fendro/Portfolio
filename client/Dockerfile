# Build Stage
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./

RUN npm install

# Copy the rest of the application code to the container
COPY . .

RUN npm run build

# Runtime Stage
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/node_modules /usr/share/nginx/node_modules
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]