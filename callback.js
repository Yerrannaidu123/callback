// function dudu(){
//     console.log("i love you")
// }
// function ishq(){
//     console.log("chinna proposed tanuja...but she rejected intially. after, she fell in love with chinna and she accepted him. ")
// }
// function bubu(c,t,love,thanuu,chintu){
//     console.log(c +" "+"loves"+" "+ t);
//     love()
//     thanuu()
//     chintu()
    
// }
// function chintu(){
//     console.log("res");
// }

// let c = "chinna";
// let t = "tanu";
// bubu(c,t,dudu,ishq,chintu)
  

function chintu(a,b,fn)
{
    var res = a+b;
    console.log(res)
    fn(res)
    
}
function printinhtml(res)
{
    document.write(res)
}

chintu(3,6,printinhtml)