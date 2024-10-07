FROM node:18-alpine

WORKDIR /app

COPY backend/package.json ./
COPY backend/package-lock.json ./
RUN npm install --production

COPY backend/dist ./dist
COPY backend/prisma/schema.prisma ./dist/prisma

# Navigate to the dist directory and run Prisma generate
WORKDIR /app/dist
RUN npx prisma generate

WORKDIR /app
CMD ["node", "dist/index.js"]