#!/bin/sh

echo "Preparing _dist directory"
if [ -d "_dist" ]; then
    rm -rf _dist
fi

mkdir _dist

echo "Building project"
babel ./src -d _dist/