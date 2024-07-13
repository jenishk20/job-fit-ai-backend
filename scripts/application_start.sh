#!/bin/bash

# Set permissions
sudo chmod -R 777 /home/ec2-user/express-app

# Navigate into our working directory where we have all our GitHub files
cd /home/ec2-user/express-app

# Add npm and node to path
export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

# Install pnpm globally if not installed
if ! command -v pnpm &> /dev/null
then
    npm install -g pnpm
fi

# Install node modules
pnpm install

# Start our node app in the background
pnpm run dev > app.out.log 2> app.err.log < /dev/null & 
