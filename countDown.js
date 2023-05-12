"use strict";
const targetDate = new Date('2023-12-31T23:59:59');
function countdown() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    //Here 1000 is used due to getTime() return time in millsecond to convert into second divide by 10000
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
    if (difference <= 0) {
        clearInterval(interval);
        console.log('Countdown finished!');
    }
}
const interval = setInterval(countdown, 1000);
