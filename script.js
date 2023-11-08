const counterInput = document.getElementById('counter_limit');
let option;
document.getElementById("miMenu").onchange = function() {
    option = this.value;
}

const startButton = document.getElementById('start').addEventListener('click', () => {
    const counterLimit = parseInt(counterInput.value);
    counters(option, counterLimit);
})

const randomStartButton = document.getElementById('random_start').addEventListener('click', () => {
    const counterLimit = Math.floor(Math.random() * 500) + 1;
    counters(option, counterLimit);
})

function counters(option = "2", counterLimit) {
    console.log(counterLimit)
    const counterNumbers = [0];
    switch(option) {   
        case "2":
        console.log('2')
            for (let i = 0; counterNumbers[i] <= counterLimit; i++){
                if(counterNumbers[i]+2 > counterLimit){
                    break
                }
                counterNumbers.push(counterNumbers[i]+2);
            }
            break;
        case "3":
            console.log('3')
            for (let i = 0; counterNumbers[i] <= counterLimit; i++){
                if(counterNumbers[i]+2 > counterLimit){
                    break
                }
                counterNumbers.push(counterNumbers[i]+3);
            }
            break;
        case "5":
            console.log('5')
            for (let i = 0; counterNumbers[i] <= counterLimit; i++){
                if(counterNumbers[i]+2 > counterLimit){
                    break
                }
                counterNumbers.push(counterNumbers[i]+5);
            }
            break;
    }
    counterNumbers.join(', ');
    document.getElementById('counter').textContent = counterNumbers;
}