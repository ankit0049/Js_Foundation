const first = document.querySelector(".first");
const  btns = document.querySelectorAll(".second>button");
 
btns.forEach((btn)=> {
    btn.addEventListener('click', 
    (e)=> {
        if(e.target.id==='one')
        {
          var val =  setTimeout(()=>{
              first.innerHTML = "START THE SETTIMEOUT"
            },0)
        } 

        else 
        {
            clearTimeout(val);
            first.innerHTML = "CLEAR THE SETTIMEOUT"
        }
    })
})
