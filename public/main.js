// loader
const loaderContainer = window.document.querySelector(".loader-container");
const circleLoaders = window.document.querySelectorAll(".circle-loader");

let theme = JSON.parse(localStorage.getItem("current-theme"));


if(theme === null){
    localStorage.setItem("current-theme", JSON.stringify(true))
    theme = JSON.parse(localStorage.getItem("current-theme"));
}

if (theme) {
    loaderContainer.style.backgroundColor = "#121212";
    loaderContainer.style.color = "#DADADA";
    circleLoaders.forEach( circle => {
        circle.style.borderColor = "#A13251"
    })
} else {
    loaderContainer.style.backgroundColor = "#E1E1E1";
    loaderContainer.style.color = "#333333";
    circleLoaders.forEach( circle => {
        circle.style.borderColor = "#008F96"
    })
}
