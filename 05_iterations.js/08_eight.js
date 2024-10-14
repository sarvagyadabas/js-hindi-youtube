const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc , curval) { // acc is accumulator and curval is current value  
//     console.log(`acc : ${acc} and curval : ${curval}`);
//     return acc + curval;
// }, 0) // 0 is the initial value of the accumulator

// const myTotal = myNums.reduce( (acc , curval) => acc + curval, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemname:"js course",
        price:2999,
    },
    {
        itemname:"py course",
        price:999,
    },
    {
        itemname:"cpp course",
        price:1999,
    },
    {
        itemname:"java course",
        price:3999,
    },
]

const total = shoppingCart.reduce( (initialPrice , item) => initialPrice + item.price , 0 );

console.log(total);


