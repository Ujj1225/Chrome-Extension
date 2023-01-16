const buyEl = document.querySelector("#buy-el");
buyEl.innerHTML = "<button onclick=buy()>" + "Buy!" + "</button>";
function buy(){
    buyEl. innerHTML = "<p>" + "Thank you for making purchase!" + "</p>"
}