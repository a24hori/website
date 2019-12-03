#!/bin/bash
# build hugo blog
if [ "$2"="true" ] ; then
    cd blog/
    rm -r public/
    hugo
    cd ../
fi
# git push
git add --all
git commit -m "$1"
git push origin master


