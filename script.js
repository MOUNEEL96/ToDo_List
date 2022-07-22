let count=0;
function addItem(e){
    let item=document.getElementById("input").value;
    if(item.trim()==""||item.trim()==null){
        alert("Please enter a value");
        return false;
    }else{
        document.getElementById("input").value= "";
    }
    let p=document.createElement("p");
    p.setAttribute("key",count);
    p.innerText=item;
    p.addEventListener("click", removeItem);
    count++;


    let div=document.getElementById("inputlist");
    div.appendChild(p);
}
function removeItem(e){
    let div=document.getElementById("inputlist");
    div.removeChild(e.target);
}