FROM node:alpine

# copy the packages
ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json

#i install the dependencies
RUN rm -rf build
RUN cd /tmp && npm install

# copy the app
ADD ./ /src
RUN rm -rf src/node_modules && cp -a /tmp/node_modules /src/

# build necessary, even if no static files are needed,
WORKDIR /src
RUN npm run build

# start the app
CMD ["node", "build/src/app.js"]