ls -v *.jpeg | cat -n | while read n f; do mv -n "$f" "$n.jpeg"; done
ls -v *.jpeg | cat -n | tail -n1
