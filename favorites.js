


let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
const back_button = document.querySelector('.back-button');




const form_sub = document.querySelector('.Title');



back_button.addEventListener('click', () => {
    window.location.href = 'home.html';
});


//if (favorites) {
//const fav = localStorage.getItem("Favorites");
 //   const ImgDisplay = document.getElementById("fav_img");
//}
for (let l = 0; l < 3; l++) {
    var fav_store = document.querySelector('.fav_img');
    const fav_img = document.createElement('div');
    fav_img.className = 'fav_img';
    fav_img.innerHTML = `
                `;
}