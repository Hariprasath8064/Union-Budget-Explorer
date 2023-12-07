# Using the official Node.js runtime as parent image
FROM node:18

# Install pm2 globally
RUN npm install -g nodemon

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy entire application code to the working directory
COPY . .

# Exposing the port on which the application operates
EXPOSE 8080

# Start the Node.js application using pm2
CMD ["nodemon", "app.js"]
