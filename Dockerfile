FROM nginx:latest
COPY storybook/storybook-static /usr/share/nginx/html/komponenter
COPY nginx.conf /etc/nginx/conf.d/default.conf
