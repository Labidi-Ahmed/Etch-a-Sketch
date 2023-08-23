const container=document.querySelector(".container");
function grid(container,rows,columns){
for(i=0;i<rows;i++){
    div=document.createElement("div");
    for(j=0;j<columns;j++){
        box=document.createElement("div")
        box.classList.add("box")
        div.append(box)

    }
    div.classList.add("row")
    container.append(div)
    

}}

/*
box32=document.querySelectorAll(".box")
box32.forEach(box => {box.setAttribute('id','box32')
    
});
*/

grid(container,16,16)
box16=document.querySelectorAll(".box");
box16.forEach(box => {box.setAttribute('id','box16')
    
});

