# WhatsAppAPI_RaspberryPi_RTU_or_PLC_Incident_Response_System_Satellite_Factory

From Raspberry Pi post request to WhatsAPP

Demo:

https://youtube.com/shorts/FwCR7hibfsQ?feature=share

_______________________________________________________________________________

Next, Create WhatsAPP webhook endpoint to get response for Raspberry Pi from WhatsAPP

On Progress


Incoming webhook: {"object":"whatsapp_business_account","entry":[{"id":"1042","changes":[{"value":{"messaging_product":"whatsapp","metadata":{"display_phone_number":"15550278669","phone_number_id":"10"},"contacts":[{"profile":{"name":"W "},"wa_id":""}],"messages":[{"from":"6011","id":"wamid.HBgMNjAxMTEwODY3OTc1FQIAEhggNjk3RDVFNzFEQkFBMTZFNzA3OEY2RTM0QTRCOUZCOUEA","timestamp":"1678679308","text":{"body":"turnON"},"type":"text"}]},"field":"messages"}]}]}
turnON
send HTTP request to PLC to turn on

{ error: 

   { message: '(#33) The requested phone number has been deleted.',
   
     type: 'OAuthException',
     
     code: 33,
     
     fbtrace_id: 'AKv11OI7-HxGVVweeySQ6Tl' } }

