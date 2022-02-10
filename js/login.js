const loginSubmitBtn = document.getElementById('login-submit');
const emailInputField = document.getElementById('user-email');
const passwordInputField = document.getElementById('user-password');
loginSubmitBtn.addEventListener('click', function () {
    const userEmail = emailInputField.value;
    const userPassword = passwordInputField.value;
    if (userEmail == "jahid@gmail.com" && userPassword == "Jahid@2424") {
        window.location.href = 'banking.html';
    }
    else {
        console.log('Invalid Email or password!');
    }
})