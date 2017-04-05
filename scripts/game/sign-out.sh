#!/bin/bash

#run below with no # sign in terminal. It will call the script and run it.

#ID=11 TOKEN=BAhJIiUzZTVjMmQxMTBmMjczNzU4YWM1ZWRlYjRiMGE1N2ZhOAY6BkVG--cae5abc0a537fc40099761f80eb63de5f5c3a8d7 sh scripts/game/sign-out.sh
API="${API_ORIGIN:-http://localhost:4741}"
  URL_PATH="/sign-out/$ID"
  curl "${API}${URL_PATH}" \
    --include \
    --request DELETE \
    --header "Authorization: Token token=$TOKEN"

# data output from curl doesn't have a trailing newline
echo
