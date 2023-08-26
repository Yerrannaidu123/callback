
// function callbacktest(){
//     console.log("test is passed");
// }
// function test1(){
//     console.log("test is again passed");
// }


// function javascript(){
    
//     for (var i=0;i<=20**2;i++){
//         if (i%2==0 ){
//             console.log("even")
//         }else{
//             console.log(i)
//         }
//     }
// }


// function girls(a,c,test,test2,small){
//     console.log(a+c);
//     test()
//     test2()
//     small()
// }
// let f=4;
// let s=3;

// girls(f,s,callbacktest,test1,javascript)
let a = [42,32,45,67];
        let sum=0;
        function chinna(ele){
            sum= sum+ ele;
            average= sum/4;
            console.log(sum);
        } 
        a.forEach(chinna)
        console.log(average);