
let cartArray = [];

// players selection 

function addToCart(element){
    const playersName = element.parentNode.parentNode.children[0].innerText;

    const olBody = document.getElementById('myList');
    
    const ol = document.createElement('ol');
    ol.innerHTML=`
    <li>${cartArray.length + 1}. ${playersName}</li>
    `;
    if(cartArray.length === 5){
        
        alert('sorry!!!  you can not add more than five');
        return;
    }
    element.setAttribute('disabled', true);
    element.classList.add('btn');
    element.style.background = '#AEAEAE'
    
    olBody.appendChild(ol);
    cartArray.push(playersName);
    
}

// caculation budget 

// common function 

function display(elementId){
    const PlayerField = document.getElementById(elementId);
    const perPlayerString = PlayerField.value;
    const perPlayer = parseFloat(parseFloat(perPlayerString).toFixed(2));
    PlayerField.value = '';
    return perPlayer;

}

// playerExpenses 

document.getElementById('calculate').addEventListener('click', function(){
    const parPlayerAmount = display('per-player');
    if(isNaN(parPlayerAmount) || parPlayerAmount < 0){
        alert('please provid a valid number');
        return;
    }
    const totalExpenses = cartArray.length * parPlayerAmount;
    const playerExpenses = document.getElementById('player-expenses');
     playerExpenses.innerText = totalExpenses;
    
});

// total Amount

document.getElementById('calculate-total').addEventListener('click', function(){

    const managerAmount = display('manager-amount');
    const coachAmount = display('coach-amount');

    const playerExpensesString = document.getElementById('player-expenses').innerText;
    const playerExpenses = parseFloat(parseFloat(playerExpensesString).toFixed(2))
    
    const totalAmount = managerAmount + coachAmount + playerExpenses;

    const totalAmountField = document.getElementById('total-amount');
    if(isNaN(managerAmount) || isNaN(coachAmount) || managerAmount < 0 || coachAmount < 0){
        alert('please provid a valid number');
        return;
    }
    totalAmountField.innerText = totalAmount;
})

