# Use the official alpine-based Node image
FROM node:alpine

# Set the working directory
WORKDIR /server/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY ./package.json ./

# Install dependencies
RUN npm install

# copy rest of the files
COPY ./ ./

# Copy the rest of the application code
COPY . .

# Define the primary command
CMD ["npm", "start"]
