#!/bin/bash
set -x
TARGET_DIR="../data/mitmproxy/"
DEST_DIR="../data/mm-capture/"
MITMPROXY2MAHIMAHI="../../../../software/mitmproxy2mahimahi/mitmproxy2mahimahi.py" 

#mkdir -p $TARGET_DIR
for i in `ls ${TARGET_DIR}`; do
	#echo $i
	if [[ "$i" == "nytimes" ]] ; then
		#mitmdump --showhost -n -q -s "${MITMPROXY2MAHIMAHI}" -r ${TARGET_DIR}${i}
		mitmdump -n -q -s "${MITMPROXY2MAHIMAHI}" -r ${TARGET_DIR}${i}
	fi
done
