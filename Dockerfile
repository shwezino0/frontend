# Use the official lightweight Node.js 18 image.
# https://hub.docker.com/_/node
FROM node:18.17.0 as build
# Create and change to the app directory.
WORKDIR /frontend

COPY package.json package-lock.json ./

# Install dependencies.
# If you add a package-lock.json speed your build by switching to 'npm ci'.
# RUN npm ci --only=production
RUN npm install --legacy-peer-deps
# Copy local code to the container image.
COPY . .

RUN npm run build

FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /frontend/build /usr/share/nginx/html
