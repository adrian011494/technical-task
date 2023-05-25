# Use a base image with Node.js installed
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the project files to the container
COPY . .

# Install project dependencies
RUN npm install && cd client && npm install

# Expose the port on which the server will run
EXPOSE 8000 8080

# Set the command to start the server
CMD ["npm", "start"]
