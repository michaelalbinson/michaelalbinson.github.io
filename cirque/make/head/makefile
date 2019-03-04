all: head.html ./compiled/root ./compiled/l1 ./compiled/l2

./compiled/root:
	cp head.html compiled/root.html

./compiled/l1:
	sed -e 's:="./:="../:g' head.html > compiled/l1.html

./compiled/l2: 
	sed -e 's:="./:="../../:g' head.html > compiled/l2.html