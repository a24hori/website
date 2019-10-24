#!/bin/bash
# build hugo blog
cd blog/
rm -r public/
hugo
cd ../
# git push
git add --all
git commit -m "$1"
git push origin master


