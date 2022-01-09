#!/bin/bash

# project_path=$(cd `dirname $0`; pwd)
# project_name="${project_path##*/}"
# echo $project_path
# echo $project_name


project_path=$(cd `dirname $0`; pwd)
project_name=$(basename $project_path)
printf "*****************************\n"
printf "开始执行---%s\n" $project_name
printf "\n\n\n"
cd $project_path
git add .
git commit -m "Mac_AutoSave"
git pull --rebase origin master
git push
printf "\n\n\n"
printf "执行完毕---%s\n" $project_name
printf "*****************************\n"
