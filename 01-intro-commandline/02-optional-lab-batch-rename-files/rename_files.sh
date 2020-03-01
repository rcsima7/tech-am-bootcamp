for file in *.png
  do
    # Prepend "smartly_" in front of every filename
    mv "$file" "smartly_${file}"

    # Remove every occurrence of "smartly_" from every filename
    # mv "$file" "${file/smartly_/}"
done
