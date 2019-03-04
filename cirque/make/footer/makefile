all: footer.html ./compiled/root ./compiled/l1 ./compiled/l2

./compiled/root:
	cp footer.html compiled/root.html

./compiled/l1:
	sed -e 's:="./:="../:g' footer.html > compiled/l1.html

./compiled/l2: 
	sed -e 's:="./:="../../:g' footer.html > compiled/l2.html