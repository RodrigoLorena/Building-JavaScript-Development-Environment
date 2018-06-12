
const taxRate = 0.08;
const phonePrice = 99.99;
const acessoryPrice = 9.99;
const spendingThreshold = 200;


var accountBalance = 303.91 //Number(prompt("What's your account balance:"));
var phoneCost = phonePrice;


function calculateTax(amount){
    return amount*taxRate;
}

function formatToDollars(amount){
    console.log(amount.toFixed(2) + "$"); //eslint-disable-line no-console
}

while(accountBalance > phoneCost) {
    while(phoneCost < spendingThreshold){
        phoneCost += acessoryPrice;
    }


    phoneCost += calculateTax(phoneCost);
    formatToDollars(phoneCost);

    accountBalance -= phoneCost;
}