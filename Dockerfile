FROM nginx:latest
RUN rm -rf /usr/share/nginx/html
COPY apps/astro/dist /usr/share/nginx/html
COPY apps/storybook/storybook-static /usr/share/nginx/html/storybook
COPY nginx.conf /etc/nginx/conf.d/default.conf
