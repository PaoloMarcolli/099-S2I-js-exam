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
            this.nodeStructure=new Node();
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
    
        
        createControls(container){
            container.appendChild(this.nodeStructure.createDivElement());
            container.appendChild(this.nodeStructure.createButtonElement('increase'));
            container.appendChild(this.nodeStructure.createButtonElement('decrease'));
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
    