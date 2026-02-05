const back_button = document.querySelector('.back-button');
var data;
var grid = document.querySelector(".grid-container");

back_button.addEventListener('click', () => {
    window.location.href = 'home.html';
});

if (localStorage.getItem("favorites")) {
    data = JSON.parse(localStorage.getItem("datalist"));
    console.log("Loaded from localStorage");
    if (grid) {
        makeCards();
    }
} 
function makeCards() {
    grid.innerHTML = "";

    data.forEach(function (datalist) {
        let card = document.createElement("div");
        card.classList.add("card");

        let textData =
            "<div class='grid-container'>" + animeTitle + "</div>";

        card.innerHTML = textData;
        grid.appendChild(card);
    });
}




if (localStorage.getItem("datalist")) {
    data = JSON.parse(localStorage.getItem("datalist"));
} else {
    data = [];
}









//if (favorites) {
//const fav = localStorage.getItem("Favorites");
 //   const ImgDisplay = document.getElementById("fav_img");
//}

