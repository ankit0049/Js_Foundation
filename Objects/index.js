//  Singleton Object  
// Object.create() // singleton  

// Object Literal

const user = {
    gmail : "some@gmail.com", 
    fullname : {
        username: {
            first : "Ankit",
            last  :"Rajput"
        }
    }
} 

 //  First way to Access the object 

 console.log(user.fullname.username.first)

 //  The first way  failed to Accessing the spacing key name   example is below
 
 const secondUser ={
    gmail:"second@gmail.com",
    "first name" : "Ankit",
    "second name ": "Rajput",
 }  

//  console.log(secondUser.first name)   <=  this way give error 

 console.log(secondUser["first name"]);  


 /* In Js By Defalut key is taken in String What if i want Symbol type key */ 
 
 const val = Symbol(abc)

 const obj3 = {
    [val] : "this is Symbol type"
 } 

 console.log( typeof (obj3.val)) 

 // Object.freez() method used for the freezing the object means we cant able to  update the object or add the value