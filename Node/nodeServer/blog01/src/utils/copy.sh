#!/bin/sh
cd /Users/ntfs/Desktop/Learn/Node/nodeServer/blog01/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log