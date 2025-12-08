# server/Dockerfile
# Using a specific version and Alpine for smaller image size

# Stage 1: Build Stage (Install Dependencies)
FROM node:22-alpine AS builder

WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
# Skip dev dependencies to keep the image small
RUN npm install --omit=dev

# Stage 2: Final Image
FROM node:22-alpine

WORKDIR /usr/src/app

# Copy installed dependencies from the builder stage
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Copy the rest of the application code
# This includes server.js, db.js, controller folder, and route folder
COPY . .

# Expose the port your application listens on (from server.js)
EXPOSE 8000

# Command to run the application when the container starts
CMD ["node", "server.js"]