#!/bin/bash

cd ./src/hau-lms
npm run build

rm -rf ../../docs
cp -r ./dist ../../docs
