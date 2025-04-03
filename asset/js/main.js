
function OnDomLoaded(){
    if (document.readyState==="loading"){
        /*
      txtState.innerHTML="DOM is loading...";
      console.log(myResult);*/
    }
    else{
        let outputControl= document.querySelector('[data-current-value]');
        let increaseControl= document.querySelector('[data-increase-value]');
        let decreaseControl= document.querySelector('[data-decrease-value]');
        let container=document.getElementById('ctlContainer');

        const counter= new Counter (container);

        
        /*
        const counter= new Counter(outputControl,increaseControl,decreaseControl);

        increaseControl.addEventListener('click', () => {
            counter.increaseCounter();
            counter.refreshControl();
        });

        decreaseControl.addEventListener('click', () => {
            counter.decreaseCounter();
            counter.refreshControl();
        });
        */

        /*
        const numberButtons=document.querySelectorAll('[data-number]');
        const operationButtons=document.querySelectorAll('[data-operation]');
        const equalsButtons=document.querySelector('[data-equals]');
        const deleteButtons=document.querySelector('[data-delete]');
        const allClearButtons=document.querySelector('[data-all-clear]');
        const previousOperandTextElement=document.querySelector('[data-previous-operand]');        const currentOperandTextElement=document.querySelector('[data-current-operand]');

        const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);
        
        numberButtons.forEach( button => {
            button.addEventListener('click', () => {
                calculator.appendNumber(button.innerText);
                calculator.updateDisplay();
            });
        });
        
        operationButtons.forEach( button => {
            button.addEventListener('click', () => {
                calculator.chooseOperation(button.innerText);
                calculator.updateDisplay();
            });
        });       
        
        equalsButtons.addEventListener('click',button => {
            calculator.compute(); 
            calculator.updateDisplay();
        });

        allClearButtons.addEventListener('click',button => {
            calculator.clear();
            calculator.updateDisplay();
        });
        */
    }
  }
  
  // Completamente caricato
  if (document.readyState==="loading"){
    document.addEventListener('DOMContentLoaded',OnDomLoaded);
  }
  else{
    OnDomLoaded();
  };
  