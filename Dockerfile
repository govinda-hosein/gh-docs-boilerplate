FROM node:23 AS base 
RUN npm install -g npm@11.0.0

ENV NPM_CONFIG_LOGLEVEL=warn 
ENV NPM_CONFIG_COLOR=false 

WORKDIR /home/node/app 
COPY . /home/node/app/ 

FROM base AS production 
WORKDIR /home/node/app 
RUN npm ci
RUN npm run build 

FROM nginx:1.26.2 AS deploy 
WORKDIR /home/node/app 
COPY --from=production /home/node/app/build /usr/share/nginx/html/