let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
            document.getElementById('screen').style.backgroundColor = "white"
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            document.getElementById('screen').style.backgroundColor = "green"
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

