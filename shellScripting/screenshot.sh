#!/bin/bash

outputfolder="$HOME~/shellScript/screenshot data"

if [ !-d "$DIRECTORY" ]; then
    mkdir -p ${outputfolder}

    while [ 1 ];do
    date=$(date +%d\-%m\-%Y\_%H.%M.%S)
	file="/tmp/${date}.jpg"
	screencapture -t jpg -R${rect} -x ${file}

	output="${outputfolder}/${date}.jpg"

	MODDATE=$(stat -f "%Sm" $file)
    done
else 

    while [ 1 ];do
    date=$(date +%d\-%m\-%Y\_%H.%M.%S)
	file="/tmp/${date}.jpg"
	screencapture -t jpg -R${rect} -x ${file}

	output="${outputfolder}/${date}.jpg"

	MODDATE=$(stat -f "%Sm" $file)
    done
fi

#or

#!/bin/bash

#echo "set interval:"
#read nsec

#while true; do scrot -a -d nsec '~/shellScript/screenshot data'; done