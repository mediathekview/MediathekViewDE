#!/bin/bash

docker run --rm -it -p 1313:1313 -v "$PWD":/src klakegg/hugo:0.54.0-ext-alpine server --bind=0.0.0.0