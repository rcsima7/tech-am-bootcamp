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

