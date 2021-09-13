const countDown =()=>{
    const countDate = new Date(`sep 14,2021 00:00:00`).getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    //how the fucks does time work?
    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour *24;

    //calculate
    const textDay = Math.floor((gap/day));
    const textHour = Math.floor((gap%day)/hour);
    const textMinut = Math.floor((gap%hour)/minute);
    const textSecond = Math.floor((gap%minute)/second);
    document.querySelector('.day').innerText = textDay<10?'0'+textDay:textDay;
    document.querySelector('.hour').innerText = textHour<10?'0'+textHour:textHour;
    document.querySelector('.minute').innerText = textMinut<10?'0'+textMinut:textMinut;
    document.querySelector('.second').innerText = textSecond<10?'0'+textSecond:textSecond;
}
countDown();

setInterval(countDown,1000);