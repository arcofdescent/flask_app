#!/usr/bin/python3

import sys
from flask import Flask, render_template, request, make_response
from pprint import pprint
import json
import requests
import logging

app = Flask(__name__)

iex_endpoint = 'https://api.iextrading.com/1.0'

@app.route('/')
def index():
    ret = { 'status': 'ok' }
    res = make_response(json.dumps(ret))
    res.headers['Content-Type'] = 'application/json'
    
    return res

@app.route('/stock/<symbol>/quote')
def get_quote(symbol):

    iex_url = iex_endpoint + "/stock/{}/quote".format(symbol)
    r = requests.get(iex_url)
    
    res = make_response(r.text)
    res.headers['Content-Type'] = 'application/json'
    res.headers['Access-Control-Allow-Origin'] = "*"

    return res

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
