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
        alert('Invalid Email or password!');
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

const newCustomerInputName = document.getElementById('new-customer-input-name');
const newCustomerInputaddress = document.getElementById('new-customer-input-address');
const newCustomerInputmobile = document.getElementById('new-customer-input-mobile');
const newCustomerInputemail = document.getElementById('new-customer-input-email');
const newCustomerInputsubmit = document.getElementById('new-customer-input-submit');
const noNewNotificationIcon = document.getElementById('no-new-notification');
const newNotificationIcon = document.getElementById('new-notification');

document.getElementById('new-customer-input-submit').addEventListener('click', function () {

    //&& newCustomerInputaddress.value != "" && newCustomerInputmobile.value != ""


    // console.log(newCustomerInputName);
    // if (newCustomerInputmobile.value.length != 11) {
    //     console.log('Mobile Number must be 11 Digit.');
    // }
    if (newCustomerInputName.value != "" && newCustomerInputaddress.value != "") {
        // newCustomerInputsubmit.removeAttribute('disabled');
        const page = window.open('banking.html')
        page.addEventListener('DOMContentLoaded', () => {
            console.log(newNotificationIcon);
            // noNewNotificationIcon.setAttribute('disabled', true);
            newNotificationIcon.removeAttribute('disabled');
        })


    }
    else {
        // newCustomerInputsubmit.setAttribute('disabled', true);

    }
})