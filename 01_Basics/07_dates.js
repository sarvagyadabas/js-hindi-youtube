// // //Dates

// // //let myDate = new Date()


// // // console.log(myDate.toString());
// // // console.log(myDate.toDateString());
// // // console.log(myDate.toISOString());
// // // console.log(myDate.toJSON());
// // // console.log(myDate.toLocaleDateString());
// // // console.log(myDate.toLocaleString());
// // // console.log(typeof myDate);

// let myCreatedDate = new Date("08-24-2023")
// // console.log(myCreatedDate.toDateString);

// let myTimeStamp = Date.now()
// // console.log(myTimeStamp);
// // console.log(myCreatedDate.getTime());
// //To convert to seconds
// console.log(Math.floor((Date.now())/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);

// console.log(`The date today is ${newDate} and the day today is ${newDate.getDay()}.`);

newDate.toLocaleString('default',{
    weekday:"long" 
})

