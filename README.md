# ET0735_DevOps_App

ET0735 DevOps Mini Project

This React-Native app is meant to be used as part of a python project with raspberry pi. 

This project has to have a working implementation in about 1 week or less (for the app).

The purpose of this app is to essentially generate a QR code which is then scanned by a raspberry pi cam 2, 
and makes the motor on the Pi's development board turn.

For the sake of any collaborators, let's just forget about all that and focus on the primary functions of the app, and its flow.

LoginScreen -> Contains a login menu and registration that was originally supposed to be hosted on Firebase,
but now there are issues with integration.
Maybe Flask and another DB will be better suited for it.
If you would like to collaborate on Firebase, please let me know.

HomeScreen -> Have a list of 9 drinks, 
that can each be clicked on, which leads to a payment menu.

PaymentMenu -> Generates a (unique or fixed) QR code,
which is scanned by the raspberry pi cam 2.
(can be achieved by expo add react-native-qrcode-svg, and expo add react-native-svg.)
Ideally, a new QR code should be generated for each new transaction,
but in the interest of time, anything will do.

(One of my rubrics is for a Docker image to be built on the raspberry pi,
which I assume means an API server acknowledging that the raspberry pi cam successfully scanned the qr code.
I could use some advice on how to implement a working version of what has been described.)
