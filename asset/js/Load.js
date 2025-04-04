let counter;

// Buttons 'click' eventHandler ( delegate used for multiple objects).
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

// Page DOMContentLoaded eventHandler.
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
        let counterButtons = document.querySelectorAll('.data-button');
        counterButtons.forEach( button => {
            button.addEventListener('click', (event) => {
                buttonsOnClick(event);
            });
        });        
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
  