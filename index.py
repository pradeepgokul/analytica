#!/usr/bin/python
import sys
import time
from requests import get

#Calling IP Gatheing API
ip = get('https://api.ipify.org').text

print (ip)