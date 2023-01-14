let mylead = [];
// const is used for storing constant
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn")

// More professional way of using onclick
inputBtn.addEventListener("click", function(){
    mylead.push(inputEl.value);
    console.log(mylead);
})