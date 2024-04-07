const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let hrElement = document.getElementById("hr");
let mnElement = document.getElementById("mn");
let scElement = document.getElementById("sc");
let msElement = document.getElementById("ms");

let hr = "00", mn = "00", sc = "00", ms = "00";

let initial = null;

start.addEventListener("click", strt);
function strt()
{
    initial = setInterval(() => 
    {
        ms++;
        if(ms >= 100)
        {
            sc++;
            ms = 0;
        }        
        if(sc >= 60)
        {
            mn++;
            sc = 0;
        }        
        if(mn >= 60)
        {
            hr++;
            mn = 0;
        }        
        
        msElement.innerHTML = ms;
        scElement.innerHTML = sc < 10 && sc > 0 ? "0"+sc : sc;
        mnElement.innerHTML = mn < 10 && mn > 0 ? "0"+mn : mn;
        hrElement.innerHTML = hr < 10 && mn > 0 ? "0"+mn : mn;
    }, 10);
    start.removeEventListener("click", strt);
}



stop.addEventListener("click", stp);
function stp ()
{
    clearInterval(initial);
    start.addEventListener("click", strt);
}



reset.addEventListener("click",rest);
function rest()
{
    stp();
    hr = "00";
    mn = "00"; 
    sc = "00";
    ms = "00";

    hrElement.innerHTML = hr;
    mnElement.innerHTML = mn;
    scElement.innerHTML = sc;
    msElement.innerHTML = ms;
}
