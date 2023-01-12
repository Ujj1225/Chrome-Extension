let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let apple = document.querySelector(".apple-shelf");
let orange = document.querySelector(".orange-shelf");
function sorter()
{
    for(let count = 0; count <fruit.length; count++)
    {
        if(fruit[count]=== "🍎"){
            apple.textContent += "🍎";
        }
        else{
            orange.textContent += "🍊";
        }
    }
}
sorter();     
