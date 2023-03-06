function myFunction() {
    var x = document.getElementById("Links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
let y = document.getElementById("icon")

console.log(y.getBoundingClientRect())

let clock = new Date()
let time = clock.getHours()
let greet

let message = (function () {
    time >= 17 ? greet = 'Good Evening' :
        (time >= 12) ? greet = 'Good Afternoon' :
            (time >= 0) ? greet = 'Good Morning' : greet = 'Welcome'

    let welcomeText = document.getElementById('p')
    welcomeText.textContent = greet

}())