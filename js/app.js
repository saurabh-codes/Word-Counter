// Text Area
let textBox = document.getElementById("text_box");

textBox.addEventListener('input', function(){
    // Char Counter
   let text = this.value;
   let char = text.length;

   document.getElementById("char").innerHTML = char;

   // Removing Extra Spaces from Start and End from Word.  
   text = text.trim();

   // Word Counter
   let word = text.split(" ");

   // Removing Extra Spaces between Words.
   let cleanList = word.filter(function(elm){
        return elm != ""; 
   });    
   
   document.getElementById("word").innerHTML = cleanList.length;
    
});