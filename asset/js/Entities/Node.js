// Node class.
class Node{
    // Constructor create element passing elementName,className,idName
    constructor(elementName,className=undefined,idName=undefined){
        let resultNode = document.createElement(elementName);
        // if no passed check
        if (className!=undefined){
            resultNode.classList.add(className);
        }
        if (idName!=undefined){
            resultNode.id=idName;
        }
        return resultNode;
    }
}