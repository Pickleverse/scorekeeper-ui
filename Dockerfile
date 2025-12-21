# Multi-stage Dockerfile for Next.js
# Builder: installs dependencies and builds the app
FROM node:20-slim AS builder
WORKDIR /app

# Install dependencies (including dev deps needed for build)
# Use package*.json to allow package-lock or npm-shrinkwrap if present
COPY package*.json ./
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build

# Production image: only production deps + built app
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Install only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev --silent

# Copy built Next.js files and public assets
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/next.config.ts ./next.config.ts

EXPOSE 3000
# Use explicit start with port forwarding so `next start` listens on $PORT
CMD ["npm", "run", "start", "--", "-p", "3000"]
