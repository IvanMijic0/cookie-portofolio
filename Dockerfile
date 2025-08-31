FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- runtime stage ----
FROM nginx:1.27-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build/client /usr/share/nginx/html
COPY ./ops/nginx/spa.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
