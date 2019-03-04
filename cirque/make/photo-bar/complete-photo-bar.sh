#!/bin/bash

PHOTO_DIR="./assets/industrial/"

FILES="$(ls ./photo-description-pairs)"
template="$(cat photo-bar-template.html)"
OUT_FILE_NAME="./compiled/pb-__NUM__.html"
SRC_TGT_STR="__SRC&&__"
ALT_TGT_STR="__ALT&&__"

file_count=1
is_photo=1

rm -rf compiled
mkdir compiled

for FILE in $FILES; do
	temp=$template
	pair_count=1	
	done=0
	cat "./photo-description-pairs/$FILE" | while read -r LINE; do
		if ((is_photo == 1)); then
			tgt="__SRC${pair_count}__"
			LINE="${PHOTO_DIR}/${LINE}"
			is_photo=0
		else
			tgt="__ALT${pair_count}__"
			is_photo=1

			if ((pair_count==4)); then
				done=1
			fi

			((pair_count++))
		fi

		temp=${temp/$tgt/$LINE}

		if ((done==1)); then
			file_name=${OUT_FILE_NAME//__NUM__/$file_count}
			echo "$temp" >| $file_name
		fi
	done;
	((file_count++))
done;

COMPILED="$(ls ./compiled)"
for FILE in $COMPILED; do
	FILENAME="./compiled/$FILE"
	sed -e 's:="./:="../:g' $FILENAME >| ${FILENAME//.html/_l1.html}
	sed -e 's:="./:="../../:g' $FILENAME >| ${FILENAME//.html/_l2.html}
done;
