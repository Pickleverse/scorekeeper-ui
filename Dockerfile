# Multi-stage Dockerfile for Next.js
# Builder: installs dependencies (including dev) and builds the app
FROM node:22-slim AS builder
WORKDIR /app

# Copy manifest files and install ALL dependencies (including dev) so
# TypeScript is available while Next loads `next.config.ts` during build
COPY package*.json ./
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build

# Production image: only production deps + built app
FROM node:22-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Install only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev --silent

# Copy built Next.js files and public assets from builder
# Note: do NOT copy `next.config.ts` into the runtime image. Leaving
# the TypeScript config only in the builder prevents Next from trying
# to load TypeScript at runtime.
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "run", "start", "--", "-p", "3000"]
