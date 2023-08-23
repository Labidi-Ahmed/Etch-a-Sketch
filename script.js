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
grid(container,32,32)
