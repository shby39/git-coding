let number="0123456789abcdefghijklmnopqrstuvwxyz";
let otp ="";
for(let i=0;i<4;i++){
    otp+=number[Math.floor(Math.random()*number.length)]
}
alert(`the one time password is ${otp}`)
// console.log(otp);
let otp_array=otp.split("");
console.log(otp_array);
let otp_1=document.getElementById("otp1");
let otp_2=document.getElementById("otp2");
let otp_3=document.getElementById("otp3");
let otp_4=document.getElementById("otp4");
// set Timeout
setTimeout(()=>{
    otp_1.innerHTML=otp_array[0];
},1000)
setTimeout(()=>{
    otp_2.innerHTML=otp_array[1];
},1500)
setTimeout(()=>{
    otp_3.innerHTML=otp_array[2];
},2000)
setTimeout(()=>{
    otp_4.innerHTML=otp_array[3];
},2500)

function verify(){
    let msg=document.getElementById("msg");
    // msg.innerHTML="<br><b>the otp is verified</b>"
    alert(`otp is verified`)
}