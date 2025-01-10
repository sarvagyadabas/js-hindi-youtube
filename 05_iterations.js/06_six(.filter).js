// const coding = ["cpp","js","java","python"];

// const values = coding.forEach( (item)=>{
//     // console.log(item);
//     return item;
// } )

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter( (num) => num>4 )

// if scope is opened then use the return keyword 
// const newNums = myNums.filter( (num) => {
//     return num>4 ;
// } )

// const newNums = [];

// myNums.forEach( (num)=>{
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    {
        title : 'book one', genre:'fiction',publish:1981,edition:2004
    },
    {
        title : 'book two', genre:'history',publish:1982,edition:2005
    },
    {
        title : 'book three', genre:'fiction',publish:1983,edition:2006
    },
    {
        title : 'book four', genre:'history',publish:1984,edition:2007
    },
    {
        title : 'book five', genre:'fiction',publish:1985,edition:2008
    },
    {
        title : 'book six', genre:'history',publish:2002,edition:2009
    },
    {
        title : 'book seven', genre:'fiction',publish:1987,edition:2010
    }
];

// const userBooks = books.filter( (bk) => bk.genre === 'history' )

// const userBooks = books.filter( (bk) => {
//     return bk.genre === 'history'
// } )

// let userBooks = books.filter( (bk) => bk.publish >= 2000 )

let userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'history'

} )

console.log(userBooks);


