
FROM node:18-alpine 

WORKDIR /app

# Install dependencies
COPY package*.json ./

RUN npm install

# Copy the rest of the code
COPY . .

# Expose port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "dev"]


