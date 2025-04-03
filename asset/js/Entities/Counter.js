class Counter{

        constructor(container){
            this.createControls(container);
            //this.refreshControl();
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
    
        // Dinamic creation of control and binding-event to related objects 
        createControls(container){
            // Value node.
            let node = new Node("div","data-display","idValue");
            // Append all elements
            container.appendChild(node);
            // Increase button.
            node = new Node("button","data-button","idButtonDecrease");
            // Append button.
            container.appendChild(node)
            // Decrease button.
            node = new Node("button","data-button","idButtonIncrease");
            // Append button.
            container.appendChild(node)
            // 
            this.buttonsControl=document.querySelectorAll('[data-button]');
        }
        
        getDisplayNumber(number){
            console.log(number);
            let resultToDisplay=0;
            if (number!==undefined ){
                resultToDisplay=number.toString();
            }
            return resultToDisplay.toString();
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
            console.log(this.outputControl);
            console.log(this.counterValue);
            this.outputControl.innerText=this.getDisplayNumber(this.counterValue);
        }
    };
    