document.getElementById('login-btn').addEventListener('click', function () {
    let numberInput = document.getElementById('number-input');
    let number = numberInput.value;
    console.log(number)

    let digitInput = document.getElementById('digit-input');
    let pin = digitInput.value;
    console.log(pin)

    if (number === '01300666763' && pin === '1234') {
        alert('login seccesfull')
        window.location.assign('home.html')
    } else {
        alert('login failed')
        return;
    }
})