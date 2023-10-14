#!/usr/bin/bash
echo "Getting Front-End Files to be deployed"
cp -r ../../../FrontendRepo/package.json ../../../FrontendRepo/public ../../../FrontendRepo/src ./
export NVM_DIR="$HOME/.nvm"
[-s "$NVM_DIR/nvm.sh"] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
echo npm i
npm i
npm run build
echo "deployed"