
//Sidenav function 
function sideFunc() {
    const sidenav = document.querySelector(".sidenav");
    sidenav.classList.toggle("active");
}

//Add subscriber 
const form = document.querySelector("form");

if(form) {
    form.addEventListener("submit", event => {
        event.preventDefault();

        const formdata = new FormData(form);
        const data = Object.fromEntries(formdata);

        fetch("https://kickboxing-email-api.herokuapp.com/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

        alert("Thank you for your subscribing 😊");
        window.location.replace("./index.html");
    })
}