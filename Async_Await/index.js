 const response = true;
 
 const promiseOne = new Promise ((resolve,reject)=>{

    setTimeout(()=> { 
        if(response)
        {
            resolve(`The Promise is Succesfully Return and Controll By the Try and Catch ${response}`);
        } 
        else 
        {
            reject(response);
        }

    },1000);
 }) 

 async function Handle()
 {
    try{  
        const promiseValue = await promiseOne ;
        console.log(promiseValue);
    }
    catch(error){
  console.log(error);
    }
 } 
 Handle()  



 