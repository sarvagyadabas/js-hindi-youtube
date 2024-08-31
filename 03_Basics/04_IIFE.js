// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)

// To remove the global scope pollution we use IIFE 

(function chai (){
    console.log(`DB connected`);
    
})();

// If semi-colon is not used then error will occur

// ( () => {
//     console.log(`DB connected TWO `);    
// } )();

( (name) => {
    console.log(`DB connected TWO ${name}`);    
} )(name="hitesh");
