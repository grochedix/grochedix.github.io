FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
COPY avocat-affaires-site/package.json avocat-affaires-site/package-lock.json ./avocat-affaires-site/
COPY restaurant-etoile/package.json restaurant-etoile/package-lock.json ./restaurant-etoile/
COPY marathon-terre-lune/package.json marathon-terre-lune/package-lock.json ./marathon-terre-lune/
RUN npm run install:all
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/index.html .
COPY --from=builder /app/404.html .
COPY --from=builder /app/portrait.png .
COPY --from=builder /app/apple-touch-icon.png .
COPY --from=builder /app/favicon.svg .
COPY --from=builder /app/robots.txt .
COPY --from=builder /app/sitemap.xml .
COPY --from=builder /app/js ./js
COPY --from=builder /app/projets ./projets
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
