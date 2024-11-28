FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
ENV NODE_ENV=production
ENV VITE_API_URL=//api.printf.store/api/v1
ENV VITE_WEB_NAME=WePress
RUN yarn build


FROM nginx:alpine
COPY --from=builder --chown=www-data:www-data /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
RUN chmod 777 -R /usr/share/nginx/html/assets
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]