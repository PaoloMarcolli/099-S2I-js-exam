class Node{
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
    
}