function init(){
//add your javascrip between these two lines of code
 
  const button = document.getElementById("entrybutton");
  const input  = document.getElementById("entryinput");
  const output = document.getElementById("textoutput");

  button.addEventListener("click", function() {
    const userText = input.value;
    alert("Tanim: " + userText);
    
    output.textContent = userText;
  });
}



window.addEventListener('load', init);
