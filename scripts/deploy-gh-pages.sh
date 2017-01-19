#!/bin/bash

git config --global user.name "Travis-CI"
git config --global user.email "travis@example.com"

npm run deploy-gh-pages -- -r https://${GH_TOKEN}@github.com/seek-oss/seek-style-guide
