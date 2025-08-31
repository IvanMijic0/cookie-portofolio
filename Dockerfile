# --- deps
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# --- build
FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Build both client + server (React Router build)
RUN npm run build

# --- runtime (SSR)
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# If your server reads PORT/HOST, set them here
ENV PORT=3000
ENV HOST=0.0.0.0

# minimal files to run the server build
COPY package*.json ./
COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
# if your app serves /public at runtime, keep this:
COPY ./public ./public

EXPOSE 3000
# this should run your server build (adjust if your start script differs)
CMD ["npm", "run", "start"]
