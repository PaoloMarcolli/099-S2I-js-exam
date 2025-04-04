// Counter class.
class Counter{
        // Constructor pass element to append control.
        constructor(container){
            this.counterValue=0;
            this.createControls(container);
            this.reset();
        }

        // Dinamic creation of control and binding-event to related objects 
        createControls(container){
            // FlexBox is my favuorite container 
            let flxNode1 = new Node("div","fl-main-item","IdDisplay");
            container.appendChild(flxNode1);
            // Buttons node.
            let flxNode2 = new Node("div","fl-main-item");
            container.appendChild(flxNode2);
            let flxNode3 = new Node("div","data-button","IdButtonDecrease");
            flxNode2.appendChild(flxNode3)
            let flxNode4 = new Node("div","data-button","IdButtonIncrease");
            flxNode2.appendChild(flxNode4)
            // Come si fa ad mettere la gestione dell'evento qui ????? 
            // Ho provato a passare la callBack all'evento ma il this era undefined ???
            // Grazie professore...
        }    
        // Reset counter.        
        reset(){
            this.counterValue=0;
            this.refreshDisplay(this.counterValue);
        }           
        // Increase counter. 
        increaseCounter(){
            this.counterValue++;
            this.refreshDisplay(this.counterValue);
        }        
        // Decrease counter.
        decreaseCounter(){
            this.counterValue--;
            this.refreshDisplay(this.counterValue);
        }
        // Refresh control ( Display )
        refreshDisplay(value){
            let display=document.getElementById('IdDisplay');
            display.innerText=this.getDisplayNumber(this.counterValue);
        }        
        // Routine to convert number to string & check if valid value
        getDisplayNumber(number){
            //console.log(number);
            let resultToDisplay=0;
            if (number!==undefined ){
                resultToDisplay=number.toString();
            }
            return resultToDisplay.toString();
        }
    };
    