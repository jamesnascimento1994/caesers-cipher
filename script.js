let btn = document.querySelector('.output-btn');
let cypherInput = document.querySelector('.cypher-input');
let output = document.querySelector('.output');

btn.addEventListener('click', () => {
    if (cypherInput.value == "") {
        output.innerText = "Please Enter a Cypher."
    } else {
        let cypherInputValSplit = cypherInput.value.split("")
        output.innerText = cypherInputValSplit.map.call(cypherInputValSplit, function(char) {
          let x = char.charCodeAt(0);
          return x < 65 || x > 90 ? String.fromCharCode(x) : x < 78 ? String.fromCharCode(x + 13) : String.fromCharCode(x - 13); 
            }).join("");
        }
      }
)