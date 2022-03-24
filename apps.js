function playAgain() {

    do {

    function askName() {
        var name = prompt("Enter your name");
        return name
    }



    function greeting(a) {
        alert(`Welcome, ${a}! I hope you are well.`);
    }







    function humanTurn() {
        var hum =0;
        do {
            var ran2 = Math.floor(Math.random() * 10) +1

            console.log(ran2);

            hum = hum + ran2

            console.log(hum);

            var humnum = prompt(`Your current number is ${hum}. \n Would you like another number? (y or n)  \n If you go over 20, you will lose`); 

            if (hum >= 21){
                humnum = "n";
            }

        } while (humnum != "n") 


        
        alert (`Your final number is ${hum}`);
        


        return hum
    }



    function computerTurn(){
        var comp = 0;

        do {

            var ran = Math.floor(Math.random() * 10) +1

            console.log(ran);

            comp = comp + ran

            console.log(comp)
        

        } while (comp <= 16) {

            alert(`My number is ${comp}`)

        }

    
            alert ("Lets tally up")
            return comp
    }



    function compareNumbers(name, hum, comp ) {

        var h = 0;
        var c = 0;



        if (hum > 20){

            alert(`Your number was ${hum}. Since you went over 20, I win. `);
            c++

        }else if (comp > 20) {
            
            alert(`My number was ${comp}. Since I went over 20, you win. `);
            h++

        }else if (20 >= hum > comp) {

            alert(`The score was Human: ${hum} to Computer: ${comp}. You win. `);
            h++

        } else if (hum < comp <= 20) {

            alert(`The score was Human: ${hum} to Computer: ${comp}. I win. `);
            c++

        } else if (hum == comp) {

            alert(`The score was Human: ${hum} to Computer: ${comp}. We tied. Both get points. `);
            c++
            h++

        }
        alert(`Final score was Human: ${h} to Computer: ${c}`)
    }

    compareNumbers(greeting(askName()),humanTurn(),computerTurn())

    var leave = prompt("Would you like to keep playing? (yes or no)");

} while (leave != "no") 

alert("Have a good day")

}

playAgain()