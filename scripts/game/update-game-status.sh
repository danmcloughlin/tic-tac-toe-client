#!/bin/bash

#run below with no # sign in terminal. It will call the script and run it.

#ID=1 INDEX=2 VALUE=x OVER=false TOKEN=BAhJIiVhMGRjYzUyZTM2Y2VlYWRkMmI2Nzg1ODc4OTYwZmRjZAY6BkVG--5fb146d5ccf63bdbbf6995c83b0b5028e8883fe5 sh scripts/game/update-game-status.sh
API="${API_ORIGIN:-http://localhost:4741}"
  URL_PATH="/games/$ID"
  curl "${API}${URL_PATH}" \
    --include \
    --request PATCH \
    --header "Authorization: Token token=$TOKEN" \
    --header "Content-Type: application/json" \
    --data '{
      "game": {
          "cell": {
          "index": "'"${INDEX}"'",
          "value": "'"${VALUE}"'"
        },
        "over": "'"${OVER}"'"
      }
}'

# data output from curl doesn't have a trailing newline
echo
