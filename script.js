

// function to create list
function addNote(){   
    var myText=document.getElementById("myString").value;
    var node=document.createElement("li");
    var textNode=document.createTextNode(myText);
    var deleteBtn = document.createElement("button"); //creat delete button
    deleteBtn.innerHTML="remove";
    deleteBtn.id="deleteBtn";
    deleteBtn.onclick=deleteList;
    node.appendChild(textNode);
    node.setAttribute("id","select");
    node.appendChild(deleteBtn);   
    document.getElementById("myList").appendChild(node);  
    removeText(); 
}

//remove after text
function removeText(){
    document.getElementById("myString").value="";
}

//delete list
function deleteList(){
    var ul=document.getElementById("myList");
    var test=document.getElementById("select");
    ul.removeChild(test);   
}





