// Notification class banao — send(message) method ho generic print kare.
// EmailNotification, SMSNotification, PushNotification — teeno banao extend karke.
// Teeno mein send(message) override karo:
//    Email → " Email: " + message
//    SMS → " SMS: " + message
//    Push → " Push: " + message
// Array mein teeno daalo, forEach se "Order shipped!" message sabko bhejo.
class Notification {
    constructor(name){
        this.name = name;
    }
    send(message){
        console.log(message + " aaya hai");
    }
}
class EmailNotification extends Notification{
    send(message){
        console.log(message + " from email");
    }
}
class SMSNotification extends Notification{
    send(message){
        console.log(message + " from sms")
    }
}
class PushNotification extends Notification{
    send(message){
        console.log(message + " from push");
    }
}
const all = [new EmailNotification(),
            new SMSNotification(), 
            new PushNotification()];
all.forEach(function(msg){
    msg.send("Order shipped");
});