#!/bin/bash

cd ./engines/video-src-generator
node app.js

cd -
cd ./engines/chatbot-content-generator
node app.js
