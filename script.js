document.getElementById('deposite-button').addEventListener('click', function(){

   
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);

    const depositeTotal = document.getElementById('deposite-total');
     const previousdepositeText = depositeTotal.innerText;
     const previousdepositeAmount = parseFloat(previousdepositeText)
     const newDepositeTotal = previousdepositeAmount + depositeAmount;
    depositeTotal.innerText = newDepositeTotal;

    depositeInput.value = '';
})