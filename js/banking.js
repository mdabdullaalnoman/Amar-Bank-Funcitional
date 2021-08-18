function getInputValue(inputId) {
    const inputAmountText = document.getElementById(inputId).value;
    const inputAmount = parseFloat(inputAmountText);
    document.getElementById(inputId).value = '';
    return inputAmount;
};

function updateInputValue(totalValue, inputValue) {
    const totalText = document.getElementById(totalValue).innerText;
    const total = parseFloat(totalText);
    document.getElementById(totalValue).innerText = inputValue + total;
}

function currentBalance(){
    const currentBalance = parseFloat(document.getElementById('main-balance').innerText); 
    return currentBalance;
};

function updateBalanceL(inputValue, isAdd) {
    const mainBalance = currentBalance();
    if (isAdd == true) {
        document.getElementById('main-balance').innerText = mainBalance + inputValue;
    } else {
        document.getElementById('main-balance').innerText = mainBalance - inputValue;
    }
}









// -------------handle deposit area-------------
document.getElementById('deposit-btn').addEventListener('click', function () {

    const inputValue = getInputValue('deposit-input');
    if(inputValue > 0){
        updateInputValue('total-deposit', inputValue);
        updateBalanceL(inputValue , true);
    }
    

    //  const depositAmountText = document.getElementById('deposit-input').value;
    //  const depositAmount = parseFloat(depositAmountText);
    //  const totalDepositText = document.getElementById('total-deposit').innerText;
    //  const totalDeposit = parseFloat(totalDepositText);
    //  document.getElementById('total-deposit').innerText =  inputValue + totalDeposit; 
    //  document.getElementById('deposit-input').value = '';

    // update main balance
    //  const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    //  document.getElementById('main-balance').innerText = mainBalance + inputValue;

});




// -------------handle withdraw area-------------
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawAmountValue = getInputValue('withdraw-input');
    const currentBalances = currentBalance();
    if(withdrawAmountValue > 0 && currentBalances > withdrawAmountValue){
        updateInputValue('withdraw-total', withdrawAmountValue);
        updateBalanceL(withdrawAmountValue , false);
    }
    if( currentBalances < withdrawAmountValue){
        console.log(' your value is lowest form main balance');
    }
    

    // const withdrawAmountText = document.getElementById('withdraw-input').value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    // const totalWithdrawText = document.getElementById('withdraw-total').innerText;
    // const totalWithdraw = parseFloat(totalWithdrawText);
    // document.getElementById('withdraw-total').innerText =  withdrawAmountValue + totalWithdraw; 
    // document.getElementById('withdraw-input').value = '';

    // update main balance
    // const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    // document.getElementById('main-balance').innerText = mainBalance - withdrawAmountValue;

})


























//    // -------------handle deposit area-------------

// document.getElementById('deposit-btn').addEventListener('click' , function(){
//      const depositAmountText = document.getElementById('deposit-input').value;
//      const depositAmount = parseFloat(depositAmountText);
//      const totalDepositText = document.getElementById('total-deposit').innerText;
//      const totalDeposit = parseFloat(totalDepositText);
//      document.getElementById('total-deposit').innerText =  depositAmount + totalDeposit; 
//      document.getElementById('deposit-input').value = '';

//      // update main balance
//      const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
//      document.getElementById('main-balance').innerText = mainBalance + depositAmount;
//     });



//     // handle withdraw fild
//     document.getElementById('withdraw-btn').addEventListener('click' , function(){
//         const withdrawAmountText = document.getElementById('withdraw-input').value;
//         const withdrawAmount = parseFloat(withdrawAmountText);
//         const totalWithdrawText = document.getElementById('withdraw-total').innerText;
//         const totalWithdraw = parseFloat(totalWithdrawText);
//         document.getElementById('withdraw-total').innerText =  withdrawAmount + totalWithdraw; 
//         document.getElementById('withdraw-input').value = '';

//         // update main balance
//         const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
//         document.getElementById('main-balance').innerText = mainBalance - withdrawAmount;
//        })