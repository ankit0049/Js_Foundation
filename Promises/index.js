
let  response = true;   

 /* here we set the value  for the promise resolve but when we send some request to server or database
    then we dont know  our request will accept or reject so we use  Promises  

___________******************************************************** ____________________

This task we will using async await also but where we need to handle the error because there no implicit functionality avilavel 
 so we use `${Try} and ${catch}`
 
 */
let clr ;
const PromiseOne = new Promise((res, rej) => {
    clr = setTimeout(() => {
        if (response) {
            res(`The st is ${response}`);
        }
        else {
            rej(`we get the Error: Because response is ${response} `);
        }
    }, 1000)
});

  PromiseOne
    .then((result) => {
        console.log(result) 
        clearTimeout(clr)   
    
    })
    .catch((error) => console.log(error))   

    /* Here we learn About how to return the promise and  Handle Them  */
 
    
   response =true;

  const PromiseTwo = new Promise ((resolve,reject)=>{ 
    clr= setTimeout(()=> {
     
        if (response)
        {
            resolve(` The  Promise Two response is ${response}`)
        }
        else 
        {
            reject( response)
        }
    },1000)

  })      


  PromiseTwo 
  .then ((response)=>{
    console.log(response)
    clearTimeout(clr)
    return response
  }) 

  .then((data)=>console.log(data))

  .catch((error)=>console.log(error))


