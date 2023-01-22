const welcomeEl = document.querySelector("#welcome-el");
let person = "Ujj";
let greet = "Welcome";
function greetUser(name, greeting)
{
    welcomeEl.textContent = `${greeting} back ${name} 👋`;
}
greetUser(person, greet);