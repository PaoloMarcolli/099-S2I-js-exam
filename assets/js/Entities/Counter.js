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
    