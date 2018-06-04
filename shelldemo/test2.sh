#!/bin/bash
# 上面中的 #! 是一种约定标记, 它可以告诉系统这个脚本需要什么样的解释器来执行;


# 1、创建一个test文件夹，复制test1.sh文件到test文件夹里，进入文件夹test初始化一个npm并按照一个npm模块
# 2、参数传递

# 基础
# echo "test2.sh start..."
# mkdir test
# cp -rf test1.sh test/
# cd test
# npm init
# npm i --save lodash
# echo "test2.sh end


# 写成一行
# echo "test2.sh start..."
# mkdir test && cp -rf test1.sh test/  && cd test && npm init && npm i --save lodash
# echo "test2.sh end..."


# 行尾添加反斜杠 ,不马上执行命令可接着输入其他命令 
# echo "test2.sh start..."
# mkdir test && \
# 	cp -rf test1.sh test/ && \
# 	cd test && \
# 	npm init && \
# 	npm i --save lodash
# echo "test2.sh end..."


# 参数接收 $0 就是你写的shell脚本本身的名字，$1 是你给你写的shell脚本传的第一个参数，$2 是你给你写的shell脚本传的第二个参数   
# 执行bash test2.sh 1 2
echo "shell脚本本身的名字: $0"
echo "传给shell的第一个参数: $1"
echo "传给shell的第二个参数: $2"
