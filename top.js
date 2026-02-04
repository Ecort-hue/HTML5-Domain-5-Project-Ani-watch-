
var topAnimeReq = new XMLHttpRequest();
topAnimeReq.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var response = JSON.parse(this.responseText);
        var data = response.data;
        var top_list = document.querySelector('.top-anime-list');
        
        for (let l = 0; l < 3; l++) {
            var top_list = document.querySelector('.top-anime-list');
            const list_b = document.createElement('div');
            list_b.className = 'list_b';
                list_b.innerHTML = `
                <img class="list_img" src="${data[l].images.jpg.image_url}">
                <div class="list_info">
                    <h3 class="list_title">${data[l].title}</h3>
                    <h3 class="list_status">Status: ${data[l].status}</h3>
                    <h3 class="list_favorites">Add to Favorites</h3>
                    <h3 class="add">⭐</h3>
                </div>`;
            top_list.appendChild(list_b);
            addFavoritecreeper(); 
        }
    }
};

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



topAnimeReq.open("GET", "https://api.jikan.moe/v4/top/anime?sfw", true);
topAnimeReq.send();
