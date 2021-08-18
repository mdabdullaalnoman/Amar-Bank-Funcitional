function getInputValue(inputId){
    const inputAmountText = document.getElementById(inputId).value;
    const inputAmount = parseFloat(inputAmountText);
    document.getElementById(inputId).value = '';
    return inputAmount;
};




 
// -------------handle deposit area-------------

document.getElementById('deposit-btn').addEventListener('click' , function(){
//  const depositAmountText = document.getElementById('deposit-input').value;
//  const depositAmount = parseFloat(depositAmountText);
 const totalDepositText = document.getElementById('total-deposit').innerText;
 const totalDeposit = parseFloat(totalDepositText);
 const inputValue = getInputValue('deposit-input');
 document.getElementById('total-deposit').innerText =  inputValue + totalDeposit; 
//  document.getElementById('deposit-input').value = '';

 // update main balance
 const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
 document.getElementById('main-balance').innerText = mainBalance + inputValue;
});




// -------------handle withdraw area-------------

document.getElementById('withdraw-btn').addEventListener('click' , function(){
    // const withdrawAmountText = document.getElementById('withdraw-input').value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmountValue = getInputValue('withdraw-input');
    const totalWithdrawText = document.getElementById('withdraw-total').innerText;
    const totalWithdraw = parseFloat(totalWithdrawText);
    document.getElementById('withdraw-total').innerText =  withdrawAmountValue + totalWithdraw; 
    document.getElementById('withdraw-input').value = '';
   
    // update main balance
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    document.getElementById('main-balance').innerText = mainBalance - withdrawAmountValue;
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