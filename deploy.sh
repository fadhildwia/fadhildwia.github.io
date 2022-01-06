date=$(date '+%Y-%m-%d')
#!/usr/bin/env sh

set -env

yarn build

cd dist

git init

git config user.name "fadhil"
git config user.email "fadhilahdwi.a@gmail.com"

git add .
git commit -m 'New Deployment'
git push -f https://github.com/fadhildwia/fadhildwia.github.io.git master:deploy

cd -