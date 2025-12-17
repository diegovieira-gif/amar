# Multi-stage Dockerfile for Next.js production
# Uses Node.js 20 LTS on Debian slim for better glibc compatibility with Next.js

FROM node:20-bookworm-slim AS base
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Install system deps (only if needed for Sharp/Next image optimization). Kept minimal.
RUN apt-get update && apt-get install -y --no-install-recommends \
    libc6-dev \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# ---------- Builder stage ----------
FROM base AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source
COPY . .

# Build Next.js app
RUN npm run build

# ---------- Runner stage ----------
FROM base AS runner
WORKDIR /app

# Install only production dependencies
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev --prefer-offline

# Copy the built application
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/next.config.mjs ./next.config.mjs 2>/dev/null || true
COPY --from=builder /app/package.json ./package.json

# Optional: ensure a non-root user (uncomment if your env requires it)
# RUN useradd -m nextjs
# USER nextjs

EXPOSE 3000

CMD ["npm", "run", "start"]
