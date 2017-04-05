#!/bin/bash

#run below with no # sign in terminal. It will call the script and run it.

#EMAIL=danielle@danielle PASSWORD=stella sh scripts/game/sign-in.sh
API="${API_ORIGIN:-http://localhost:4741}"
  URL_PATH="/sign-in"
  curl "${API}${URL_PATH}" \
    --include \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
      "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'"
      }
    }'

# data output from curl doesn't have a trailing newline
echo
