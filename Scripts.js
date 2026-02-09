 function PlayDiceGame(){
            // The different variables to hold the different dice rolls and the sum of the rolls
            let roll1 = getRandomNumber();
            console.log("roll1 = " + roll1)

            let roll2 = getRandomNumber();
                console.log("roll2 = " + roll2)

            let rollSum = roll1 + roll2;
                console.log("rollSum=" + rollSum)

                // This allows us to test for a win for a duplicated even number
            if (roll1 == roll2 && roll1 % 2 == 0){
                // This is the message that players will get if they have a winning roll
                document.getElementById("divMessage").textContent = "You're a Winner!";
            }
            // This is the message for losing rolls
            else if(rollSum == 3 || rollSum == 5 || rollSum == 9){
                document.getElementById("divMessage").textContent = "You've been Vanquished, Go back!";
            }

            else {
                document.getElementById("divMessage").textContent = "Roll again!";
            }

            // This'll display the dice roll to the player and the outcome
            document.getElementById("divRoll1").textContent = "Dice roll 1:" + roll1;
            document.getElementById("divRoll2").textContent = "Dice roll 2:" + roll2;
            document.getElementById("divSum").textContent = "Sum:" + rollSum;
        }

        // This function is to generate a random number between what ever 2 numbers
        function getRandomNumber(){
            let number = Math.random() * 20;

            number = Math.ceil(number);

            return number;
        }