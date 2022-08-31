# Create the node image running on Alpine Linux
FROM node:alpine

# Create app directory and change to it
WORKDIR /server

# Copy contents of Dockerfile directory to /server directory
COPY . .

# Install all dependencies
RUN npm install

# Open up port 3000 for our server to run on
EXPOSE 3000

# Run our npm start command 
CMD ["npm", "start"]
