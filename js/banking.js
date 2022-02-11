// handle deposite button event
document.getElementById('depositButton').addEventListener('click', function () {
    // get the amount deposited
    const depositInputField = document.getElementById('depositInput');
    const newDepositAmount = depositInputField.value;
    const newAmount = parseFloat(newDepositAmount); //conversion
    console.log(newDepositAmount);
    // totalDeposit er inner text = newDepositAmount from above.
    const totalDeposit = document.getElementById('totalDeposit');

    const previousAmountText = totalDeposit.innerText;
    const previousAmount = parseFloat(previousAmountText); //conversion
    // now take the total deposit and add to new input
    const newTotal = previousAmount + newAmount;
    totalDeposit.innerText = newTotal; //important point
    const ultimateDepositResultString = totalDeposit.innerText;
    const ultimateDepositResultNumber = parseFloat(ultimateDepositResultString); //conversion


    console.log(ultimateDepositResultNumber); //test
    console.log(typeof ultimateDepositResultNumber); //test


    // update account balance
    const totalBalance = document.getElementById('totalBalance');
    const totalBalanceText = totalBalance.innerText;

    const previousBalanceTotal = parseFloat(totalBalanceText); //conversion
    const newBalanceTotal = previousBalanceTotal + newAmount;

    totalBalance.innerText = newBalanceTotal; //important

    const ultimateBalanceResultString = totalBalance.innerText;
    const ultimateBalanceResultNumber = parseFloat(ultimateBalanceResultString); //conversion

    console.log(ultimateBalanceResultNumber); //test
    console.log(typeof ultimateBalanceResultNumber); //test
    // clear deposit input field
    depositInputField.value = "";
})

// handle withdraw button event 
document.getElementById('withdrawButton').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdrawInput');
    const withdrawAmountString = withdrawInput.value;
    const newWithdrawAmountInNumber = parseFloat(withdrawAmountString);

    const totalWithdraw = document.getElementById('totalWithdraw');
    const previousWithdrawString = totalWithdraw.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);

    const newWithdrawTotal = previousWithdraw + newWithdrawAmountInNumber;
    totalWithdraw.innerText = newWithdrawTotal;

    const ultimateWithdrawResultString = totalWithdraw.innerText;
    const ultimateWithdrawResultNumber = parseFloat(ultimateWithdrawResultString);

    console.log(ultimateWithdrawResultNumber);
    console.log(typeof ultimateWithdrawResultNumber);

    // clear withdraw value
    withdrawInput.value = "";

    // update balance 
    const totalBalance = document.getElementById('totalBalance');
    const totalBalanceText = totalBalance.innerText;

    const previousBalanceTotal = parseFloat(totalBalanceText); //conversion
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmountInNumber;

    totalBalance.innerText = newBalanceTotal; //important

    const ultimateBalanceResultString = totalBalance.innerText;
    const ultimateBalanceResultNumber = parseFloat(ultimateBalanceResultString); //conversion

    console.log(ultimateBalanceResultNumber); //test
    console.log(typeof ultimateBalanceResultNumber);
})