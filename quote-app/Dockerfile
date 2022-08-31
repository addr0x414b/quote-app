# Use Node on Alpine Linux and call this stage builder
FROM node:alpine AS builder

# Create and change into the app directory
WORKDIR /app

# Copy all contents into the app directory
COPY . .

# Install node dependencies and build the Angular app
RUN npm install && npm run ng build

# Use nginx to run our built Angular app
FROM nginx:latest

# Change into the html directory for nginx
WORKDIR /usr/share/nginx/html

# Remove all the default nginx files
RUN rm -rf ./*

# Copy the built Angular app files into the html directory of nginx
COPY --from=builder /app/dist/quote-app .
