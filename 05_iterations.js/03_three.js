// for of

const arr = [1,2,3,4,5];

for (const num of arr) {
    //console.log(num);
        
}

const greetings = "hello world";
for (const greet of greetings) {
    //console.log(greet);
    
} 

// MAPS 

const map = new Map()
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('FR',"France");
map.set('IN',"India");

// console.log(map);

for (const key of map) {
    // console.log(key);
    
}

for (const [key , value] of map) {
    // console.log(key , ':-' , value);
    
}

for (const [ value] of map) {
    // console.log( ':-' , value);
    
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'COD',
}

for (const [key , value] of myObj) {
    console.log(key , ':-' , value);
    
}