// classic ///////// ak alg sy object creat krky dta h

// let time = new Date()      /////classic 

// console.log(time);



// let time = new Date()
// console.log(time.getMinutes());


// let time = new Date();
// console.log(time.getFullYear());        ///> . k bad jo put hwa h vo method

// let time = new Date()
// time.setDate(25);
// time.setMonth(7)
// console.log(time);



// let exemday = new Date();
// exemday.setDate(25);
// exemday.setMonth(7);
// exemday.setHours(9);
// exemday.setMinutes(30);
// console.log(exemday);


// let hourElem = document.getElementById("hour")
// let minutesElem = document.getElementById("minutes")
// let secondsElem = document.getElementById("seconds")
// setInterval(function() {
//     let time = new Date()
//     hourElem.innerText = time.getHours();
//     minutesElem.innerText = time.getSeconds();
// })


let hourElem = document.getElementById("hour")
let minutesElem = document.getElementById("minutes")
let secondsElem = document.getElementById("seconds")
setInterval(function() {
    let time = new Date()
    hourElem.innerText = time.getHours();
    minutesElem.innerText = time.getMinutes();
    secondsElem.innerText = time.getSeconds();
},1000);