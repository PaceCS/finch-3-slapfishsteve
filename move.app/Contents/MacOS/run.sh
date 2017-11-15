#!/bin/sh

dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
open -a Terminal

osascript <<END
tell application "Terminal"
    do script "cd $dir/../../..; ./node_modules/.bin/babel move.js --out-file $dir/moveES5.js; ./runJS.sh $dir/moveES5.js"
end tell
END
