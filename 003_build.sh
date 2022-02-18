#!/bin/bash
set -e

cd ./engines/video-src-generator
node app.js

cd -
cd ./engines/chatbot-content-generator
node app.js

cd -
cd ./src/hau-lms
npm run build

rm -rf ../../docs
cp -r ./dist ../../docs
