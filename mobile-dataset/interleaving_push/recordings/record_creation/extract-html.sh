#!/bin/bash
set -x
TARGET_DIR="../data/html/"

for i in `ls ${TARGET_DIR}`; do
	#echo ${TARGET_DIR}${i}\/"captured.gz"
	gunzip --keep ${TARGET_DIR}${i}\/"captured.gz"
	mv ${TARGET_DIR}${i}\/"captured" ${TARGET_DIR}${i}\/"captured.html"
done
