var upcoming = new XMLHttpRequest();
let data;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

upcoming.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        data = data.data;
        console.log(data);


        for (let i = 0; i < 3; i++) {
            const upcoming_list = document.querySelector('.upcoming-list');
            const list_a = document.createElement('div');
            list_a.className = 'list_a';
            list_a.innerHTML = `
                <img class="list_img" src="${data[i].images.jpg.image_url}">
                <div class="list_info">
                    <h3 class="list_title">${data[i].title}</h3>
                    <h3 class="list_status">Status: ${data[i].status}</h3>
                    <h3 class="list_favorites">Add to Favorites</h3>
                    <h3 class="add">⭐</h3>
                </div>`;
            upcoming_list.appendChild(list_a);
        }
        addFavoritecreeper();
    }
}


upcoming.open("GET", `upcoming.json`, true);
upcoming.send();


const View_all = document.querySelector('.view');
View_all.addEventListener('click', () => {
    window.location.href = 'upcoming.html';
});

const view2 = document.querySelector('.view2');
view2.addEventListener('click', () => {
    window.location.href = 'top.html';
});

const fav_button = document.querySelector('.fav_button');
fav_button.addEventListener('click', () => {
    window.location.href = 'favorites.html';
});


function addFavoritecreeper() {
    const addFavoriteButton = document.querySelectorAll('.add');
    addFavoriteButton.forEach(button => {
        button.addEventListener('click', () => {
            const info = button.parentElement;
            const title = info.querySelector('.list_title')
            let animeTitle = '';
            if (title) {
                animeTitle = title.innerText;
            }

            if (!animeTitle) return;



            if (!favorites.includes(animeTitle)) {
                favorites.push(animeTitle);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                alert(`${animeTitle} has been added to your favorites!`);
                console.log(favorites);
            }
        });
    });
}