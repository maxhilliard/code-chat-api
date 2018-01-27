#!/bin/sh

echo "Running docker image with dev config mounted"

docker run \
    -d \
    -p 8000:8000 \
    -v "$(pwd)"/src/config/development.json:/app/_dist/config/development.json \
    --name crypto-trader \
    crypto-trader-img