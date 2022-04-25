var myDate = new Date();
var  hrs = myDate.getHours();
var msg = "";

if (hrs<12) msg = "Günaydın!";      // After 6am
if (hrs >= 12 && hrs<17) msg = "İyi Öğlenler!";    // After 12pm
if (hrs >= 17 && hrs<=24) msg = "İyi Akşamlar!";      // After 5pm

document.write(msg);
