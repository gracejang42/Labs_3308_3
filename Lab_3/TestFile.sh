#!/bin/bash

count_lines(){
	echo "The number of lines in the file is…"
	sed -n \$= "$1"
}

count_words(){
	echo "Lines with Lorem.."
	grep -n "Lorem" $1
	echo "Lines with model.."
	grep -n "model" $1
	echo "Lines with Ipsum.."
	grep -n "Ipsum" $1
	echo "Lines with will.."
	grep -n "will" $1
}

add_text(){
	read -p "Add some text: " atext
	echo "$atext"  | tee -a "$1" 
}

copy_and_exit(){
	clear
	mkdir solution
	cp -p "$1" solution 
	echo "$(pwd $2)"
	read -p "Do you wish to continue? [y]es or [n]o: " ans
	if [ $ans == 'n' ]
	then
		echo "Exiting the script."
		exit
	else
		continue
	fi
}

if [ -f "$1" ]
then 
	echo "$1 exists"
else
	echo "File does not exist"
	exit
fi
while(true)
	do
	
	printf "Choose from the following operations: \n"
	printf "[a]count_lines\n[b]countwords\n[c]add_text\n[d]copy_and_exit\n"
	printf "=====================================\n"
	read -p "Please select a choice: " choice
	case $choice in
	[aA])
		count_lines $1
	;;

	[bB])
		count_words $1 
	;;

	[cC])
		add_text $1
	;;

	[dD])
		copy_and_exit $1 
	;;

	*)
	echo "You chose unwisely..."
	esac
done