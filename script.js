function fromInput(){
  let text = document.getElementById("fromInputName").value;
  const nodeList = document.querySelectorAll(".fromName");
  for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].innerHTML = text;
  }
};

function toInput(){
  let text = document.getElementById("toInputName").value;
  const nodeList = document.querySelectorAll(".toName");
  for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].innerHTML = text;
  }
};

let addbutton = document.getElementById("addbutton");
    addbutton.addEventListener("click", function() {
    let grids = document.getElementById("grids");
    let clone = grids.firstElementChild.cloneNode(true);
    grids.append(clone);
});

function removeItem(){
let removeItem = document.getElementById('grids');
removeItem.removeChild(removeItem.lastElementChild);
};