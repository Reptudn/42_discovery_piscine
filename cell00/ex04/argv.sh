#/bin/bash

# $# is the arguemnt count
# $* is all the arguments

if [ $# -eq 0 ]; then
	echo "No arguments supplied"
	exit 1
fi

for i in $*; do
	echo $i
done