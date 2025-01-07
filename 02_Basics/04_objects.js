//const tinderUser = new Object()  // singleton object

const tinderUser={}  //non singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"sum@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"chaudhary",
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);
// Question mark above means if full name is not available then move ahead in the code 

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"e",6:"f"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)


const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const users = [     //objects insisde array
    {
        id:1,
        email:"h@gmail.com",
    },
    {
        id:1,
        email:"h@gmail.com",
    },
    {
        id:1,
        email:"h@gmail.com",
    },
    {
        id:1,
        email:"h@gmail.com",
    },
    {
        id:1,
        email:"h@gmail.com",
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

// DESTRUCTURING 

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructuor:"hitesh",
}

// course.courseInstructor

const {courseInstructuor : instructor} = course  // by using this we wil not have to write the code in line 74 many times
console.log(instructor); 


// const navbar = ({company}) => {
    
// }

// navbar(company = "hitesh")

// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free",

// }