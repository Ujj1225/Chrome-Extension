let mylead = [];
// const is used for storing constant
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el")
console.log(ulEl);
// More professional way of using onclick
inputBtn.addEventListener("click", function(){
    mylead.push(inputEl.value);
    console.log(mylead);
})
mylead = ["www.awesomeleads.com", "www.epicleads.com", "www.leadkun.com"];
for (let i=0; i<mylead.length; i++)
{
    ulEl.textContent += mylead[i] + " ";
}