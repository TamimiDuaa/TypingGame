
//declaring Variables
const balloon = []; // balloons elements with words randomly appear on the screen
const wordsArray = ["boo","root" , "hello", "banana","challenges", "problems", "snake", "kangaroo", "computer", "professional"];
let score = 0;
let myWord = "";
let failedWords = "";
let myWordElement = document.querySelector(".myWord");
let scoreElement = document.querySelector(".score");

start();
pressKey();
keyUp();
   




function start(){
    scoreElement.innerHTML = score;
    document.querySelector(".typingWord").value = myWord;
    for (let i = 0; i < 10; i++) {
        balloon[i]= document.createElement("div");
        balloon[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        balloon[i].innerText = wordsArray[i];
        
        balloon[i].classList.add("balloon");
        balloon[i].style.left = Math.floor(Math.random() * (window.innerWidth - 100)) + "px"; // Ensure it stays within viewport
        balloon[i].style.top = window.innerHeight + "px"; // Start from the bottom of the viewport
        document.body.appendChild(balloon[i]);
    
        setTimeout(() => {
            balloon[i].style.animation = `moveUp 5s linear forwards`;
            myWordElement.innerHTML = wordsArray[i];
            scoreElement.innerHTML = score;

        }, i * 5000); // Delay each balloon by 5 second
        
        isCorrect= () =>{
            console.log(myWord+" "+myWordElement.textContent);
            if(myWord.toUpperCase() === myWordElement.textContent.toUpperCase()){
                score++;

                myWord="";
                
                
            }
            else{
                score--;
                failedWords += myWord;
                myWord="";
                
            }
            
        }
    }
    
}


function pressKey(){
    document.addEventListener('keydown', function(event) {
        const key = event.key.toUpperCase(); // Convert key to uppercase to handle both cases
        const targetElement = document.querySelector(`.${key}`);
        console.log(key);
        switch (key) {
            case 'A':
                targetElement.classList.toggle('pressed');
                myWord+="A";
                break;
            case 'B':
                targetElement.classList.toggle('pressed');
                myWord+="B";
                break;
            case 'C':
                targetElement.classList.toggle('pressed');
                myWord+="C";
                break;
            case 'D':
                targetElement.classList.toggle('pressed');
                myWord+="D";
                break;
            case 'E':
                targetElement.classList.toggle('pressed');
                myWord+="E";
                break;
            case 'F':
                targetElement.classList.toggle('pressed');
                myWord+="F";
                break;
            case 'G':
                targetElement.classList.toggle('pressed');
                myWord+="G";
                break;
            case 'H':
                targetElement.classList.toggle('pressed');
                myWord+="H";
                break;
            case 'I':
                targetElement.classList.toggle('pressed');
                myWord+="I";
                break;
            case 'J':
                targetElement.classList.toggle('pressed');
                myWord+="J";
                break;
            case 'K':
                targetElement.classList.toggle('pressed');
                myWord+="K";
                break;
            case 'L':
                targetElement.classList.toggle('pressed');
                myWord+="L";
                break;
            case 'M':
                targetElement.classList.toggle('pressed');
                myWord+="M";
                break;
            case 'N':
                targetElement.classList.toggle('pressed');
                myWord+="N";
                break;
            case 'O':
                targetElement.classList.toggle('pressed');
                myWord+="O";
                break;
            case 'P':
                targetElement.classList.toggle('pressed');
                myWord+="P";
                break;
            case 'Q':
                targetElement.classList.toggle('pressed');
                myWord+="Q";
                break;
            case 'R':
                targetElement.classList.toggle('pressed');
                myWord+="R";
                break;
            case 'S':
                targetElement.classList.toggle('pressed');
                myWord+="S";
                break;
            case 'T':
                targetElement.classList.toggle('pressed');
                myWord+="T";
                break;
            case 'U':
                targetElement.classList.toggle('pressed');
                myWord+="U";
                break;
            case 'V':
                targetElement.classList.toggle('pressed');
                myWord+="V";
                break;
            case 'W':
                targetElement.classList.toggle('pressed');
                myWord+="W";
                break;
            case 'X':
                targetElement.classList.toggle('pressed');
                myWord+="X";
                break;
            case 'Y':
                targetElement.classList.toggle('pressed');
                myWord+="Y";
                break;
            case 'Z':
                targetElement.classList.toggle('pressed');
                myWord+="Z";
                break;
            case "ENTER":
                isCorrect();
                console.log(myWord);
                break;
            default:
                break;
        }
    });

}

function keyUp(){
    document.addEventListener('keyup', function(event) {
        const key = event.key.toUpperCase(); // Convert key to uppercase to handle both cases
        const targetElement = document.querySelector(`.${key}`);

        switch (key) {
            case 'A':
                targetElement.classList.remove('pressed');
                break;
            case 'B':
                targetElement.classList.remove('pressed');
                break;
            case 'C':
                targetElement.classList.remove('pressed');
                break;
            case 'D':
                targetElement.classList.remove('pressed');
                break;
            case 'E':
                targetElement.classList.remove('pressed');
                break;
            case 'F':
                targetElement.classList.remove('pressed');
                break;
            case 'G':
                targetElement.classList.remove('pressed');
                break;
            case 'H':
                targetElement.classList.remove('pressed');
                break;
            case 'I':
                targetElement.classList.remove('pressed');
                break;
            case 'J':
                targetElement.classList.remove('pressed');
                break;
            case 'K':
                targetElement.classList.remove('pressed');
                break;
            case 'L':
                targetElement.classList.remove('pressed');
                break;
            case 'M':
                targetElement.classList.remove('pressed');
                break;
            case 'N':
                targetElement.classList.remove('pressed');
                break;
            case 'O':
                targetElement.classList.remove('pressed');
                break;
            case 'P':
                targetElement.classList.remove('pressed');
                break;
            case 'Q':
                targetElement.classList.remove('pressed');
                break;
            case 'R':
                targetElement.classList.remove('pressed');
                break;
            case 'S':
                targetElement.classList.remove('pressed');
                break;
            case 'T':
                targetElement.classList.remove('pressed');
                break;
            case 'U':
                targetElement.classList.remove('pressed');
                break;
            case 'V':
                targetElement.classList.remove('pressed');
                break;
            case 'W':
                targetElement.classList.remove('pressed');
                break;
            case 'X':
                targetElement.classList.remove('pressed');
                break;
            case 'Y':
                targetElement.classList.remove('pressed');
                break;
            case 'Z':
                targetElement.classList.remove('pressed');
                break;
            default:
                break;
        }
    });
}
function gameFinished(){
    window.alert(`your score is ${score} and you failed typing those words ${failedWords}`);
}