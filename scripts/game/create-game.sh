#!/bin/bash

#run below with no # sign in terminal. It will call the script and run it.

#TOKEN=BAhJIiVhMGRjYzUyZTM2Y2VlYWRkMmI2Nzg1ODc4OTYwZmRjZAY6BkVG--5fb146d5ccf63bdbbf6995c83b0b5028e8883fe5 sh scripts/game/create-game.sh
API="${API_ORIGIN:-http://localhost:4741}"
  URL_PATH="/games"
  curl "${API}${URL_PATH}" \
    --include \
    --request POST \
    --header "Authorization: Token token=$TOKEN" \
    --header "Content-Type: application/json" \

# data output from curl doesn't have a trailing newline
echo
