FROM node:20-alpine
WORKDIR /srv
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY server.mjs ./

RUN mkdir -p /origin /cache
ENV ORIGIN_DIR=/origin
ENV CACHE_DIR=/cache
EXPOSE 8080
CMD ["npm", "start"]
