document.getElementById("button").addEventListener("click", function() {
    alert("Sent to phone !");
  });
 
  
  document.getElementById("copy-button").addEventListener("click", function() {
    let textbox = document.getElementById("textbox");
    textbox.select();
    document.execCommand("Copy");
    alert("Copied to clipboard!");
  });
  
  