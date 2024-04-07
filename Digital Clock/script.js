const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(() => 
{
    const time = new Date();
    hrs.innerHTML = time.getHours();
    min.innerHTML = time.getMinutes();
    sec.innerHTML = time.getSeconds();
}, 1000);
