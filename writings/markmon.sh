#!/bin/bash

for f in *.md; do
	
	filename=$(basename "$f")
	extension="${filename##*.}"
	filename="${filename%.*}"
	echo $filename
	pandoc $f -o html/$filename.html; 

done
