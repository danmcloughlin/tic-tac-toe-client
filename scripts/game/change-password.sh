#!/bin/bash

#run below with no # sign in terminal. It will call the script and run it.

#ID=11 OLDPW=stella NEWPW=prince TOKEN=BAhJIiUyNmExZTcyMWY5MjlhMTVhZmExNzlkNjg2NzUyM2U0NAY6BkVG--d53fbdf3f1e0d6553307aa9e0a6f4aa32e608aa6 sh scripts/game/change-password.sh
API="${API_ORIGIN:-http://localhost:4741}"
  URL_PATH="/change-password/$ID"
  curl "${API}${URL_PATH}" \
    --include \
    --request PATCH \
    --header "Authorization: Token token=$TOKEN" \
    --header "Content-Type: application/json" \
    --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'


# data output from curl doesn't have a trailing newline
echo
