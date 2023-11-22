console.log("Welcome to Dojonary!")

/* Login - Logout Button */
function turnOff(element){
element.innerText = 'Logout';
}

/* like buttons */
function likeButton(element){
    console.log(element)
    alert('Ninja was liked')
}

/* Hide Add Definition Button */

function hide(element) {
    element.remove();
}