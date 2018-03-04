#!/usr/bin/env bash

(yarn start . &)
while ! nc -z 127.0.0.1 3000; do sleep 1; done

yarn e2e

ps -ef | grep 'node scripts/start.js' | awk '{print $2}' | xargs kill -9
