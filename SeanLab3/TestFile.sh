#!/bin/bash

count_lines(){
	echo "the number of lines in the file is…"
	grep -c ".*" "$1"
}

count_words(){
	echo "Lines containing $2"
	grep "$2" "$1"
	echo "Lines containing $3"
	grep "$3" "$1"
	echo "Lines containing $4"
	grep "$4" "$1"
	echo "Lines containing $5"
	grep "$5" "$1"
}

add_text(){
	read -p "Add some text: " text
	echo "$text"  | tee -a "$1" 
}

copy_and_exit(){
	clear
	mkdir "$2"
	cp -p "$1" "$2"
	echo "$(pwd $2)"
	read -p "Do you wish to continue? [y]es or [n]o: " ans
	if [ $ans == 'n' ]
	then
		echo "Exiting the script."
		break
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
	printf "################################\n"
	read -p "Your choice: " choice
	case $choice in
	[aA])
		count_lines $1
	;;

	[bB])
		count_words $1 "Lorem" "model" "Ipsum" "will"
	;;

	[cC])
		add_text $1
	;;

	[dD])
		copy_and_exit $1 solution
	;;

	*)
	echo "wrong choice!"
	esac
done
