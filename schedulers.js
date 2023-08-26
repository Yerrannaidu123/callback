// function settimeouttest(){
//     console.log("I was tested");
// }
//  let a= setTimeout(settimeouttest,2000)
// console.log("chinnarohit")

document.write("here in the above function we set a TIME for a function by using SETTIMEOUT sheduler. so the function exucuted in console for after the timeout 2000ms (millisec) it will print.then we writr another function to stop that time so we used CLEARTIMEOUT function to stop that inerval", '<br/>' ,'<br/>')

function setintervaltest()
{
    console.log("interval test")
}
let b= setInterval(setintervaltest,2000)
console.log("hiii")

function clear(){
    clearInterval(b)
} 
setTimeout(clear,5000)

document.write("here in the above function we set a TIMEINERVAL for a function by using SETINTERVAL sheduler. so the function exucuted in console for every 2000ms (millisec) it will print.then we writr another function to stop the interval so we used CLEARINERVAL function to stop that inerval ")