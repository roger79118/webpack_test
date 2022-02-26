let list=document.createElement("ul");
// let item1=document.createElement("li");
// item1.textContent="CSS Loader";
// list.appendChild(item1);

// let item2=document.createElement("li");
// item2.textContent="SASS Loader";
// list.appendChild(item2);

// let item3=document.createElement("li");
// item3.textContent="Babel Loader";
// list.appendChild(item3);
let named = ["css loader", "cass loader", "babel loader"];
for (let i=0;i<named.length;i++) {
    let item=document.createElement("li");
    item.textContent=named[i];
    list.appendChild(item);
}


export default list;