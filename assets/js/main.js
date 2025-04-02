class Counter{

/*    constructor(outputControl,increaseControl,decreaseControl){
        this.outputControl=outputControl;
        this.increaseControl=increaseControl;
        this.decreaseControl=decreaseControl;
        this.reset();
    }*/

    constructor(container){
/*        this.outputControl=outputControl;
        this.increaseControl=increaseControl;
        this.decreaseControl=decreaseControl;
        this.reset();*/
        this.createControls(container);
    }
    
    
    reset(){
        this.counterValue=0;
        this.refreshControl();
    }
       
    increaseCounter(){
        if (this.counterValue>20000){
            // block display error
        }
        else{
            this.counterValue++;
        }
        this.refreshControl();
        /*
        if (number==='.' && this.currentOperand.includes('.')) return
        this.currentOperand=this.currentOperand.toString() + number.toString();*/
    }
    
    decreaseCounter(){
        if (this.counterValue==0){
            // block display error
        }
        else{
            this.counterValue--;
        }
        this.refreshControl();
    }

    // Create container
    createDivElement() {
        let resultNode = document.createElement('div');
        resultNode.classList.add("output");
        resultNode.id="idOutput"
        resultNode.appendChild(this.createSubDivElement());
        return resultNode;
    }
    
    // Create display
    createSubDivElement() {
        let resultNode = document.createElement('div');
        resultNode.classList.add("data-current-value");
        resultNode.id="idValue"
        return resultNode;
    }
    
    // Create buttons
    createButtonElement(value) {
        let resultNode = document.createElement('button');
        //resultNode.className='button-'+value+'';
        resultNode.classList.add('data-'+value+'-value');
        resultNode.classList.add("button-"+value);
        return resultNode;
    }
    
    createControls(container){
        container.appendChild(this.createDivElement());
        container.appendChild(this.createButtonElement('increase'));
        container.appendChild(this.createButtonElement('decrease'));
    }
    
    getDisplayNumber(number){
        const stringNumber=number.toString();
        return stringNumber;
        /*
        const stringNumber=number.toString();
        const integerDigits =parseFloat(stringNumber.split('.')[0]);
        const decimalDigits =stringNumber.split('.')[1];
        let integerDisplay
        if (isNaN(integerDigits)){
            integerDisplay='';
        } else{
            integerDisplay=integerDigits.toLocaleString('en',{
                maximumFractionDigits: 0 });
        }
        if (decimalDigits!=null){
            return `${integerDisplay}.${decimalDigits}`;
        } else{
            return integerDisplay;
        }*/
    }

    refreshControl(){
        this.outputControl.innerText=this.getDisplayNumber(this.counterValue);
    }
};

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

        const counter= new Counter (container)
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
  