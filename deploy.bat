@echo off 
cd ../dist/
git init 
git config core.autocrlf false
git remote add origin git@github.com:Mackkkk/SummaryOfwork.git
git pull origin master
git add -A
git commit -m 'publish'
git push origin master
pause