//log in button event handler

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){
const log = document.getElementById("log-in-area"); 
log.style.display= 'none';
document.getElementById("transaction-area").style.display = 'block';
})

//deposit button event handler 

const depositBtn =  document.getElementById("addDeposit");
depositBtn.addEventListener("click",function(){
    const depositNumber = getInputNumber("depositAmount")
    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    document.getElementById("depositAmount").value = "";
 
})
//withdraw Button handler 
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click",function(){
    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1*withdrawNumber);
    document.getElementById("withdrawAmount").value= "";
    
})

//function
function updateSpanText(id , depositNumber,withdrawNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total_balance = currentNumber + depositNumber ;
    document.getElementById(id).innerText = total_balance;
    
}
function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;

}