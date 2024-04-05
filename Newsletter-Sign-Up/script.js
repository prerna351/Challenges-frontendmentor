const container = document.querySelector('#hide-container')
const errorMsg = document.querySelector('#error')
let submitButton = document.querySelector('#submit-btn');
const success = document.querySelector('#hide-success')
let successMsg = document.querySelector('.success-msg')
let successBtn = document.getElementsByClassName('active-state')

submitButton.addEventListener('click',function(e){
  let emailInput = document.querySelector('input');
    let errorMessage = document.querySelector('#error');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailRegex.test(emailInput.value)) 
    {
        errorMessage.textContent = 'Valid email required ';

    } 
    else 
    {
        errorMessage.textContent = '';
        container.style.display= "none"
        success.style.display= "block"
        successMsg.innerHTML = `A confirmation email has been sent to <b>${emailInput.value}</b> Please open it and click the button inside to confirm your subscription.` 
    }
})

let goBackButton = document.getElementById('go-back-btn');
goBackButton.addEventListener('click', function()
{
    goBackButton.style.backgroundColor = "hsl(235, 18%, 26%)";
    goBackButton.style.transition = "3";
    if(container.style.display== "none")
    {
        container.style.display= "flex";
        success.style.display= "none"
    }

})


  