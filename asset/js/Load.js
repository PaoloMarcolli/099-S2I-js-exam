let counter;

// Buttons click delegate.
function buttonsOnClick (evento) {
    switch (evento.target.id){
        case "IdButtonDecrease":
            counter.decreaseCounter();
            break;
        case "IdButtonIncrease":
            counter.increaseCounter();
            break;
        default:
            break;
    };
};

// Check if page is in loading state
function OnDomLoaded(){
    if (document.readyState==="loading"){
        /*
      txtState.innerHTML="DOM is loading...";
      console.log(myResult);*/
    }
    else{
        let value=0;
        let container=document.getElementById('IdContainer');
        console.log(container,value);
        counter= new Counter (container);
        let button = document.getElementById('IdButtonIncrease');
        /*
        numberButtons.forEach( button => {
            button.addEventListener('click', () => {
                calculator.appendNumber(button.innerText);
                calculator.updateDisplay();
            });
        });        */
        button.addEventListener('click',(event)=>buttonsOnClick(event));
        let button2 = document.getElementById('IdButtonDecrease');
        button2.addEventListener('click',(event)=>buttonsOnClick(event));
        counter.reset();
        counter.refreshDisplay('IdDisplay');
    }
}

// Check if page is in loading state
if (document.readyState==="loading"){
    document.addEventListener('DOMContentLoaded',OnDomLoaded);
}
else{
    OnDomLoaded();
};
  