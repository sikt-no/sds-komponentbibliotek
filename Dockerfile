FROM nginx:latest
WORKDIR /usr/share/nginx/html

COPY ./storybook/storybook-static ./komponenter
