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

// Login Form
function loginFormAppear() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('login-btn').style.display = 'none';
    document.getElementById('new-customer-form').style.display = 'none';
    document.getElementById('new-customer-btn').style.display = 'inline';
    // document.getElementById('invalid-popup').removeAttribute = 'style';
    document.getElementById('invalid-popup').style.display = 'block';
}

// New Customer
document.getElementById('new-customer-btn').addEventListener('click', function () {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('login-btn').style.display = 'inline';
    document.getElementById('new-customer-form').style.display = 'block';
    document.getElementById('new-customer-btn').style.display = 'none';
    document.getElementById('invalid-popup').style.display = 'none';
})