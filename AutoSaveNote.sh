#!/bin/bash

# project_path=$(cd `dirname $0`; pwd)
# project_name="${project_path##*/}"
# echo $project_path
# echo $project_name


project_path=$(cd `dirname $0`; pwd)
cd $project_path
git add .
git commit -m "Mac_AutoSave"
git pull --rebase origin master
git push origin master