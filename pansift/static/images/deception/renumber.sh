DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR
ls -v ./*.jpeg | cat -n | while read n f; do mv -n "$f" "$n.jpeg"; echo -e $n" Old:"$f".jpeg New:"$n".jpeg\r"; done
