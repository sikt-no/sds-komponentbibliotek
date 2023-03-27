FROM nginx:latest
RUN rm -rf /usr/share/nginx/html
COPY gatsby/public /usr/share/nginx/html
COPY storybook/storybook-static /usr/share/nginx/html/komponenter
COPY nginx.conf /etc/nginx/conf.d/default.conf
