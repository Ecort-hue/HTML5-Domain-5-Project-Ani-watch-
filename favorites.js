const back_button = document.querySelector('.back-button');
var data;
var grid = document.querySelector(".grid-container");
const submitButton = document.querySelector('.form-button');
const imgInput = document.querySelector('input[placeholder="Img URl"]');
const titleInput = document.querySelector('input[placeholder="Title"]');


back_button.addEventListener('click', () => {
    window.location.href = 'home.html';
});

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        console.log("Loaded from gameData.json");

        localStorage.setItem("datalist", JSON.stringify(data));
        console.log("Saved starter data to localStorage");



        function makeCards() {
            grid.innerHTML = "";

            data.forEach(function (favorites) {
                let card = document.createElement("div");
                card.classList.add("card");

                let textData =
                    "<div class='grid-container'>" + animeTitle + "</div>";

                card.innerHTML = textData;
                grid.appendChild(card);
            });
        }

if (localStorage.getItem("favorites")) {
    data = JSON.parse(localStorage.getItem("datalist"));
    console.log("Loaded from localStorage");
    if (grid) {
        makeCards();
    }
} 


    }}



if (localStorage.getItem("datalist")) {
    data = JSON.parse(localStorage.getItem("datalist"));
} else {
    data = [];




    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';


        const img = document.createElement('img');
        img.className = 'card-img';
        img.src = item.image || item.img || '';
        img.alt = item.title || 'Favorite';


        const title = document.createElement('div');
        title.className = 'card-title';
        title.textContent = item.title || 'Untitled';


        card.appendChild(img);
        card.appendChild(title);


        grid.appendChild(card);
    });
}


if (submitButton && titleInput && imgInput) {
    submitButton.addEventListener('click', () => {
        const title = (titleInput.value || '').tsubmitButtonrim();
        const image = (imgInput.value || '').trim();

        if (!title && !image) return;

        const newItem = { title, image };
        data.push(newItem);
        

        titleInput.value = '';
        imgInput.value = '';
      
    });
}











//if (favorites) {
//const fav = localStorage.getItem("Favorites");
 //   const ImgDisplay = document.getElementById("fav_img");
//}

