let jokeTextE1 = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");
let spinner = document.getElementById("spinner");

function joke() {
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    }
    spinner.classList.add("d-none")
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            let jokeData = JSON.stringify(data.value)
            jokeTextE1.textContent = jokeData;
        })
    spinner.classList.add("d-none")
}

jokeBtn.addEventListener("click", joke);