function newItem(){

    let inputVal=document.getElementById("inpt");
    if (inputVal.value==="") {
        alert("Please enter a task");
    } else {
        let alist=document.getElementById("list");
        let li=document.createElement("li");
        li.textContent=inputVal.value;
        alist.appendChild(li);
        li.setAttribute("class","element");

        let a=document.createElement("a");
        a.textContent="x";
        a.href="javascript:void(0)";
        a.className="close";
        li.appendChild(a);

        btn=document.getElementById("list");
        btn.addEventListener("click",function(e){
        let li=e.target.parentNode;
        alist.removeChild(li);

      
})
    }
}


