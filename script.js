//JS Console Objects
/*
assert()    --> Used to assert a condition
clear()     --> Clears the Console
log()       --> Outputs a message to the console
table()     --> Displays a Tabular Data
warn()      --> Used For Warning
error()     --> Used For Errors
info()      --> Used For Special Informations
time()--timeend()

console.log(console)      --> Used To List all console commands
*/
/*
alert()     --> Used to Alert about anything
Prompt()    --> Used to Recieve an Input from User
confirm()   --> Used to confirm any choice made by the User
*/
function guess(){
        let rn=Math.floor(Math.random() * 100) + 1;
        let guess
    let result=100
    let score=0
    let attempts=0
    while(true){
        guess=Number(prompt("Guess The Number"))
        if(guess==rn){
            score=result-attempts
            alert("Congratulations! You Guessed Correct \nThe Score is "+score+"\n"+"Total Attempts = "+attempts)
            break;
        }
        else if(guess>rn){
            alert("The Number is Greater than the random number")
        }
        else if(guess<rn){
            alert("The Number is Less than the random number")
        }
        else{alert("Wrong Input is Inserted"+"\n Score is 0")
            break;
        }
        attempts++
    }
}
console.log(console)