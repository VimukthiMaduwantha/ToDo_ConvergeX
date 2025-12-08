# client/Dockerfile

# Stage 1: Build the React application
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Run the build command (Vite default output is 'dist')
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the build output from the build stage to the Nginx public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 (default for Nginx web server)
EXPOSE 80

# The default command will start Nginx