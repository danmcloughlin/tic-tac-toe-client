#!/bin/bash

#run below with no # sign in terminal. It will call the script and run it.

#TOKEN=BAhJIiUxZWJlYTk0M2Y2MjQ0YzBiMDFhYjg4MjMyOTk4NTNlNQY6BkVG--550a95be31dc94c6921b5aba70e7a0770a843d21 sh scripts/game/create-game.sh
API="${API_ORIGIN:-http://localhost:4741}"
  URL_PATH="/games"
  curl "${API}${URL_PATH}" \
    --include \
    --request POST \
    --header "Authorization: Token token=$TOKEN" \
    --header "Content-Type: application/json" \

# data output from curl doesn't have a trailing newline
echo
