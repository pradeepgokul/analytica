#!/usr/bin/python
import sys
import time
from requests import get

#Calling IP Gatheing API
ip = get('https://api.ipify.org').text

#Opening A Textfile
with open('text.txt', 'a') as f:
    sys.stdout = f
    
    #Print the IP Address in the text file
    print ("--------------------------------")
    print (" ")
    print ("IP Address - {}".format(ip))
    print ("Retived on: " + time.strftime("%X") + " " + time.strftime("%x"))
    print (" ")
    print ("--------------------------------")