// Node class.
class Node{
    // Constructor create element passing elementName,className,idName
    // the constructor return element for binding related object & handlig Event.
    constructor(elementName,className=undefined,idName=undefined){
        let resultNode = document.createElement(elementName);
        if (className!=undefined){
            resultNode.classList.add(className);
        }
        if (idName!=undefined){
            resultNode.id=idName;
        }
        return resultNode;
    }
}