#!/bin/bash
set -x
TARGET_DIR="./results-mobile-3g/"
for i in `ls ${TARGET_DIR}`; do
        #echo ${TARGET_DIR}${i}\/"captured.gz"
	if [[ "$i" == "nytimes" ]] ; then
		continue
	fi
        python mobile_strategy.py --har-file ./results-mobile-3g/${i}/no_push/push/browsertime.har.gz --mergelist ../recordings/data/mergefiles/${i}/mergelist --result-dir ../recordings/data/push_strategies/same-ip-mergelist-strategies/${i} --nopush-config ../recordings/data/push_strategies/same-ip-mergelist-strategies/${i}/nopush.json 
done
