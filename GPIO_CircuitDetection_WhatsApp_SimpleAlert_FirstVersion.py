import requests
import RPi.GPIO as GPIO
import time
from time import sleep

auth_token=''
hed = {'Authorization': 'Bearer ' + auth_token}
data = {
    "messaging_product": "whatsapp",    
    "recipient_type": "individual",
    "to": "6017",
    "type": "text",
    "text": {
        "preview_url": "false",
        "body": "Your Raspberry Pi Cirucit Opened"
    }
}



GPIO.setmode(GPIO.BCM)

GPIO.setup(3, GPIO.IN)

while True:
    GPIO.setup(3,GPIO.IN)
    if GPIO.input(3) == False:
        print('Circuit Closed.')
        sleep(10) 
    elif GPIO.input(3) == True:
        url = 'https://graph.facebook.com/v15.0/100485976319513/messages'
        response = requests.post(url, json=data, headers=hed)
        print(response)
        print(response.json())
        print('Circuit Open.')
        sleep(10)
    GPIO.cleanup(3)
