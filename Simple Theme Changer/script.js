let bgContainerEl = document.getElementById("bgContainer");
let headingEl = document.getElementById('heading');
let userInputEl = document.getElementById('themeUserInput');
let theme = "Light";

function changeTheme(event) {
    if (event.key === "Enter") {
        console.log(event.key);
        console.log(String(userInputEl.value));
        if (theme === String(userInputEl.value)) {
            alert("Enter valid theme");
        } else if (String(userInputEl.value) === "Light") {
            theme = "Light";
            headingEl.style.color = "#014d40";
            bgContainerEl.style.backgroundImage = 'url("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png")';
        } else if (String(userInputEl.value) === "Dark") {
            theme = "Dark";
            headingEl.style.color = "White";
            bgContainerEl.style.backgroundImage = 'url("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png")';
        }
    }
}

userInputEl.addEventListener("keydown", changeTheme);