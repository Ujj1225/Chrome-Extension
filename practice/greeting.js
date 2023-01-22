const welcomeEl = document.querySelector("#welcome-el");
let person = "Ujj"
function greetUser(name)
{
    welcomeEl.textContent = `Welcome back ${name} 👋`;
}
greetUser(person);