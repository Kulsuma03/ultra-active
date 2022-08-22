
let cartArray = [];


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
    olBody.appendChild(ol);
    cartArray.push(playersName);
   
}


