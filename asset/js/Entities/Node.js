// Node class.
class Node{
    // Constructor create element passing elementName,className,idName
    constructor(elementName,className,idName){
        let resultNode = document.createElement(elementName);
        resultNode.classList.add(className);
        resultNode.id=idName;
        return resultNode;
    }
}