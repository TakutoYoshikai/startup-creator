#!/bin/bash

DOMAIN=$2
USERID=$1

if [ ! -e ~/Desktop/portfolio ]; then
  exit
fi
cd ~/Desktop/portfolio
echo $DOMAIN > CNAME
git init
git add .
git commit -m "init"
git remote add origin git@github.com:$USERID/myportfolio.git
gh repo create myportfolio --public --source=.
git push origin master
npm install -g gh-pages@2.0

gh-pages -d .
