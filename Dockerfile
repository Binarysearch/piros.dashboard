FROM nginx:1.15.12-alpine
COPY ./dist/dashboard/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
ARG app_version_arg
ENV APP_VERSION=$app_version_arg
CMD echo '{ "appVersion": "'${APP_VERSION}'" }' > /usr/share/nginx/html/app-info && nginx -g "daemon off;"