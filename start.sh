#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
PORT=3002
[ ! -d node_modules ] && npm install
echo "Limye Islayik -> http://localhost:$PORT"
npm run dev -- -p "$PORT"
