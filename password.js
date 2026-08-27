const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0","1","2","3","4","5","6","7","8","9",
  "!","@","#","$","%","^","&","*","(",")","-","_","+","=","[","]","{","}","|",";",":",",",".","<",">","?","/","~"
];
const generateBtn = document.getElementById("generate-el")
const Label_1 = document.getElementById("label_1")
const noteEl = document.getElementById("note")
let generatedPasword = ""


function password(){   
    let passwordLength = document.getElementById("lengthSlider").value
    let generatedPasword = ""
    for(i=0; i< passwordLength; i++){    
        let randomPass =characters[Math.floor(Math.random()*characters.length)]
        generatedPasword += randomPass
        console.log(generatedPasword)

        Label_1.textContent = generatedPasword
       
    }

    noteEl.textContent = "(click on the label to copy)"
}

Label_1.addEventListener("click", function(){
    const textToCopy = Label_1.textContent
    navigator.clipboard.writeText(textToCopy);
})


const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("length-value");

lengthSlider.addEventListener("input", function() {
    lengthValue.textContent = this.value + " characters";
});





