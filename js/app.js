let cartArray = []
function addToCart(element){
    const playersName = element.parentNode.parentNode.children[0].innerText;
    console.log(playersName)
    const olBody = document.getElementById('ol-body');
    const li = document.createElement('li');
    li.innerHTML=`
    <li>${playersName}</li>
    `;
    olBody.appendChild(li);
}