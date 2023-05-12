const targetDate: Date = new Date('2023-12-31T23:59:59');

function countdown() {
  const now: Date = new Date();
  const difference: number = targetDate.getTime() - now.getTime();
//Here 1000 is used due to getTime() return time in millsecond to convert into second divide by 10000
  const days: number = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours: number = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes: number = Math.floor((difference / (1000 * 60)) % 60);
  const seconds: number = Math.floor((difference / 1000) % 60);

  console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

  if (difference <= 0) {
    clearInterval(interval);
    console.log('Countdown finished!');
  }
}

const interval = setInterval(countdown, 1000);