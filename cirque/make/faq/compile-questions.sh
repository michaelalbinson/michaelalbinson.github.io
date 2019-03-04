FILE=q_a.txt
OUTPUT_FILE=./compiled/index.html

if !([[ -r $FILE ]]); then
	echo "No question and answer file found. Aborting complation.";
	exit 1;
fi

pageTemplate=$(cat questions.html)

qTemplate=$(cat single-question.html)
question=1
tmp=$qTemplate

rm $OUTPUT_FILE
touch $OUTPUT_FILE

cat $FILE | while read -r a; 
do 
	if ((question == 0)); then
		tmp=${tmp//__ANSWER__/$a}
		question=1
		
		echo $tmp >> $OUTPUT_FILE

		tmp=$qTemplate
	else
		tmp=${tmp//__QUESTION__/$a}
		question=0
	fi
done;

allFAQs=$(cat $OUTPUT_FILE)
page=${pageTemplate//__QUESTIONS__/$allFAQs}
echo $page >| $OUTPUT_FILE
