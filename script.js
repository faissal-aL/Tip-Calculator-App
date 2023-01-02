const bill = document.getElementById('bill');
const people = document.getElementById('people-number');
const tips = Array.from(document.getElementsByClassName('tip-value'));
const customTip = document.getElementById('custom-tip');
const resetButton = document.getElementById('reset');
const errorMessage = document.getElementById('error');

const tipAmount = document.getElementById('tip-amount');
const totalAmount = document.getElementById('total');

tips.forEach(e => e.addEventListener("click",function(){
    writeTips(e);
}));
customTip.addEventListener("keyup",function(){
    writeTips(customTip);
});

function writeTips(e){
    const totalTip = Number(bill.value) * e.value/100;
    const tipPerPerson = totalTip / people.value ;
    const totalPerPerson = (Number(bill.value) + totalTip) / people.value;
   
    if(people.value == 0) {
        errorMessage.style.display = 'block';
        people.classList.add('red-border');
    }
    else {
        errorMessage.style.display = 'none';
        people.classList.remove('red-border');       
        tipAmount.innerHTML = '$'+ tipPerPerson.toFixed(2);
        totalAmount.innerHTML = '$' + totalPerPerson.toFixed(2); 
    }
};

resetButton.addEventListener("click",function(){
    bill.value ='';
    people.value ='';
    customTip.value ='';
    tipAmount.innerHTML = '$0.00';
    totalAmount.innerHTML = '$0.00';
});