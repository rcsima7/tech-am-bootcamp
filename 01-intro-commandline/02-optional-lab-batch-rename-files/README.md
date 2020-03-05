# Batch rename practice

There are 100 "png" files here (they have no contents actually, just to save space since this is a practice).

How can you add "smartly_" in front of each and every one of these files without manually renaming them?

## Nick's Solution

Everything below this is "encrypted" as reversed strings. Use https://codebeautify.org/reverse-string to un-reverse them to see the answer.

:edisni edoc eht ees ot `hs.selif_emaner` nepo dna ,semanelif gnitluser eht ees ,`hs.selif_emaner` tpircs eht nuR

```
hs.selif_emaner/.
hs.selif_emaner x+ domhc
```

### Reka's Solution

Add one lite at a time in terminal:

for file in *.png
 do
    mv "$file" "smartly_$file"
 done  

#### Question

Do we have to put 'file' in curly brackets? 'smartly_${file}'

#### Reka's Notes
How to run a shell script from terminal:
.sh extension stands for terminal
can give it to a file and run it as a script:
touch rename_files.sh
code rename_files.sh
put the code in there

run by always the current folder and file name:
./rename_files.sh
will get denied notice, have to authorize it
chmod +x rename_files.sh

