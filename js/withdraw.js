document.getElementById("deposit-btn").addEventListener("click", function () {
    // user deposite amount 
    const userDeposit = document.getElementById("user-deposit");
    const userDepositAmount = userDeposit.value;

    // curent balnce nia asho 
    const currentDeposit = document.getElementById("current-deposit");
    // current balance ekhane rakho
    const currentValue = currentDeposit.innerText;
    // text ke number a convert korlam 
    // const currentValue = parseFloat(currentValueText.innerText);

    // ekhane jog korlam 
    const totalDeposit = parseFloat(currentValue) + parseFloat(userDepositAmount);
    //total take upore pathia dilam
    currentDeposit.innerText = totalDeposit;

    // current balance nia ashi 
    const currentBlance = document.getElementById("current-blance");
    const currentBlanceAmount = currentBlance.innerText;

    const totalBlance = parseFloat(currentBlanceAmount) + totalDeposit;

    currentBlance.innerText = totalBlance;
    // clear user input value 
    userDeposit.value = "";
})


// withdraw btn 

document.getElementById("Withdraw-btn").addEventListener("click", function () {

    const userWithdraw = document.getElementById("user-Withdraw");
    const userWithdrawBlance = userWithdraw.value;

    const curentWithdraw = document.getElementById("current-withdraw");
    const curentWithdrawBlance = curentWithdraw.innerText;

    const totalWithdraw = parseFloat(userWithdrawBlance) + parseFloat(curentWithdrawBlance);
    curentWithdraw.innerText = totalWithdraw;


    const currentBlance = document.getElementById("current-blance");
    const currentBlanceAmount = currentBlance.innerText;

    const totalWithdrawAmount = parseFloat(currentBlanceAmount) - totalWithdraw;
    currentBlance.innerText = totalWithdrawAmount;

    userWithdraw.value = "";

})