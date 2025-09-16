#/bin/bash

# $# is the arguemnt count
# $* is all the arguments

if [ $# -eq 0 ]; then
	echo "No arguments supplied"
	exit 1
fi

counter=0
for i in $*; do
	if [ $counter -eq 3 ]; then
		exit
	fi
	echo $i
	counter=$((counter + 1))
done