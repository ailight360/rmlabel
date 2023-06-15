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

function printbtn(){
var prtContent = document.getElementById("grids");
var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
WinPrint.document.write(prtContent.innerHTML);
WinPrint.document.close();
WinPrint.focus();
WinPrint.print();
WinPrint.close();
};