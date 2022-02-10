
const totaWithdraw = document.getElementById('total-withdraw');
const totalBalance = document.getElementById('total-balance');



const depositButton = document.getElementById('deposit-button');
const withdrawInput = document.getElementById('withdraw-input');
const withdrawAmount = parseInt(withdrawInput.value);
const withdrawButton = document.getElementById('withdraw-button');

depositButton.addEventListener('click', function () {
    const totalDeposit = document.getElementById('total-deposit');
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;

    const currentDepositAmount = totalDeposit.innerText;

    const currentTotalBalance = parseInt(totalBalance.innerText);
    console.log(depositInput.value);
    //Update Deposit Balance
    totalDeposit.innerText = parseInt(currentDepositAmount) + parseInt(depositAmount);
    //Update Total Balance
    totalBalance.innerText = currentTotalBalance + parseInt(depositAmount);

    console.log(totalDeposit.innerText);

    //Clearing Depopsit Input Field
    depositInput.value = '';

})
//Withdraw Section
withdrawButton.addEventListener('click', function () {
    const totalwithdraw = document.getElementById('total-withdraw');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;

    const currentwithdrawAmount = totalwithdraw.innerText;

    const currentTotalBalance = parseInt(totalBalance.innerText);
    console.log(withdrawInput.value);
    //Update withdraw Balance
    totalwithdraw.innerText = parseInt(currentwithdrawAmount) + parseInt(withdrawAmount);
    //Update Total Balance
    totalBalance.innerText = currentTotalBalance - parseInt(withdrawAmount);



    //Clearing Depopsit Input Field
    withdrawInput.value = '';

})

console.log(document.getElementById('test').value);