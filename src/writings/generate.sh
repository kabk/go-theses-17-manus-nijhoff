#!/bin/bash

cat title.md introduction.md chapter-as-I-walk-through-the-silicon-valley.md chapter-big-complex-web.md chapter-filter-troubles.md chapter-fleeting-time.md chapter-self.md conclusion.md > all.md

for f in *.md; do
	
	filename=$(basename "$f")
	extension="${filename##*.}"
	filename="${filename%.*}"
	echo $filename
	pandoc $f -o ../../html/$filename.html; 

done
