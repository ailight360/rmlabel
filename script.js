function iuFROM() {
  let text = document.getElementById("iuFROM").value;
    document.getElementById("ugCOMPANY").innerHTML = text;
  };


  function uTO() {
    let text = document.getElementById("uTO").value;
    document.getElementById("uTOFROM").innerHTML = text;
  };      

  function uPRODUCT() {
    let text = document.getElementById("uPRODUCT").value;
    document.getElementById("uPRODUCTFROM").innerHTML = text;
  };


  function uCOLOR() {
    let text = document.getElementById("uCOLOR").value;
    document.getElementById("uCOLORFROM").innerHTML = text;
  };

  function uSIZE() {
    let text = document.getElementById("uSIZE").value;
    document.getElementById("uSIZEFROM").innerHTML = text;
  };


  function uLOT() {
    let text = document.getElementById("uLOT").value;
    document.getElementById("uLOTFROM").innerHTML = text;
  };


  function uDATE() {
    let text = document.getElementById("uDATE").value;
    document.getElementById("uDATEFROM").innerHTML = text;
  };


  document.getElementById('button').onclick = duplicate;


  var i = 0;
  var original = document.getElementById('duplicater');
  
  function duplicate() {
      var clone = original.cloneNode(true); // "deep" clone
      clone.id = "duplicetor" + ++i; // there can only be one element with an ID
      original.parentNode.appendChild(clone);
  }