

// small project Using The IIFE 

const counterModule = (function() {
    let count = 0; // Private variable
  
    function updateDisplay() {
      document.getElementById("counter-display").textContent = `Count: ${count}`;
    }
  
    return {
      increment: function() {
        count++;
        updateDisplay();
      }, 
      decrement: function() {   
        if(count>0){
        count--;
        }
        updateDisplay();
      }
    };
  })();
  
  document.getElementById("increment-btn").addEventListener("click", counterModule.increment);
  document.getElementById("decrement-btn").addEventListener("click", counterModule.decrement);
  