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

// Stringify and Parse

// let myleads = `["www.awesomelead.com"]`;
// myleads = JSON.parse(myleads);
// myleads.push("www.leadkun.com");
// myleads = JSON.stringify(myleads);
// console.log(typeof(myleads));

// const is used for storing constant
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const ulEl = document.querySelector("#ul-el");
const saveBtn = document.querySelector("#tab-btn");

// Local Storage
// Adding key value pair in local Storage
// localStorage.setItem("myleads", "www.example.com");

// logging out the value of local Storage in Console
// console.log(localStorage.getItem("myleads"));

// Clearing out local storage
// localStorage.clear();

// There are two methods for arrays to string and string to arrays

// One is JSON.stringify and the other is JSON.parse

// JSON.parse le string lai array ma lagcha

// JSON.stringify le array lai string ma lagcha. Only strings are accepted as key value pairs in JSON

const leadsfromLocalStorage = localStorage.getItem("mylead");
if (leadsfromLocalStorage) {
  mylead = JSON.parse(leadsfromLocalStorage);
  render(mylead);
}

// Constructing the delete button
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  mylead = [];
  render(mylead);
});

// More professional way of using onclick
inputBtn.addEventListener("click", function () {
  mylead.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("mylead", JSON.stringify(mylead));
  render(mylead);
});

// Listening to button clicks for SAVE-BTN
saveBtn.addEventListener("click", function(){
    console.log("https://github.com/Ujj1225");
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // listItems += "<li><a target='_blank' href='" +  mylead[i] + "'>" + mylead[i] + "</a></li>";
    // Template strings is used to solve problems like this
    listItems += `
            <li>
            <a target="_blank" href="${leads[i]}">
             ${leads[i]} 
            </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}
