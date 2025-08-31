FROM node:20-alpine
WORKDIR /srv

# tiny runtime
RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini","--"]

# deps
COPY package.json ./
RUN npm ci --omit=dev

# app
COPY server.mjs ./server.mjs

# assets mount point (read-only)
VOLUME ["/assets"]

ENV PORT=4000 HOST=0.0.0.0
EXPOSE 4000
CMD ["node","server.mjs"]
