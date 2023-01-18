// mylead = ["www.awesomeleads.com", "www.epicleads.com", "www.leadkun.com"];
// for (let i=0; i<mylead.length; i++) 
// {
//     // With this you can create html document with JS
//     // Use of innerHTML
//     // ulEl.innerHTML +="<li>" + mylead[i] + "</li> ";

//     // creating element
//     const li = document.createElement("li");
//     // setting text content
//     li.textContent = mylead[i];
//     // append to ul
//     ulEl.append(li);
// }


let mylead = [];
// const is used for storing constant
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el")

// More professional way of using onclick
inputBtn.addEventListener("click", function(){
    mylead.push(inputEl.value);
    inputEl.value = ""
    renderLeads();
})

function renderLeads()
{
    let listItems = "";
    for( let i = 0; i < mylead.length; i++)
    {
        // listItems += "<li><a target='_blank' href='" +  mylead[i] + "'>" + mylead[i] + "</a></li>";
        // Template strings is used to solve problems like this 
        listItems += `
            <li>
            <a target="_blank" href="${mylead[i]}">
             ${mylead[i]} 
            </a>
            </li>
        `   
    }
    ulEl.innerHTML = listItems;
}