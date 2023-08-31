const first = document.querySelector(".first");
const  btns = document.querySelectorAll(".second>button"); 

let ST; // this is the refrence that stop the setinterval

btns.forEach ((btn)=> {
    btn.addEventListener('click' ,(para)=>{  
       
       if(para.target.id === 'setinterval'){
              ST = setInterval(()=>{
                       const  time = new Date();
                       first.innerHTML =` The time is ${time.toLocaleTimeString()}`
                },1000);
       }
       else
       {
        clearInterval(ST);
        first.textContent = `I dont know the TIME ${'00:00:00'}`
       }
    });
})
