const coding = ["cpp","js","java","python"];

coding.forEach( function(val){
   // console.log(val);
    
} )

coding.forEach( (val)=>{
   // console.log(val);
    
} )

function printMe (item){
   // console.log(item);
    
}

coding.forEach(printMe);

coding.forEach( (item , index , arr)=>{
   // console.log(item , index , arr);
    
} )

const mycoding = [
    {
        languagename : "javascript",
        languagefilename : "js",

    },
    {
        languagename : "java",
        languagefilename : "java",
        
    },
    {
        languagename : "python",
        languagefilename : "py",
        
    }
]
mycoding.forEach( (item)=>{
    console.log(item.languagename);
    
} )