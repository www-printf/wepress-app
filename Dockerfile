FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
ENV NODE_ENV=production
RUN yarn build


FROM nginx:alpine
COPY default.conf /etc/nginx/sites-available/default
COPY --from=builder --chown=www-data:www-data /app/dist /usr/share/nginx/html
RUN chmod 777 -R /usr/share/nginx/html/assets
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]