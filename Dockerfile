FROM mhart/alpine-node:8

RUN echo "Creating directory structure"
RUN mkdir /temp-build-dir /app

RUN echo 'Installing and copying node modules'
ADD . /temp-build-dir/
WORKDIR /temp-build-dir
RUN npm install --production

RUN echo "Moving app from temp build dir"
RUN mv node_modules package.json _dist ../app/
WORKDIR /app

CMD [ "node", "_dist/index.js" ]