#!/bin/sh

. $NVM_DIR/nvm.sh
nvm use

npx docusaurus clear
npx docusaurus build
