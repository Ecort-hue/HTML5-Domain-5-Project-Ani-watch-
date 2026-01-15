
var topAnimeReq = new XMLHttpRequest();
topAnimeReq.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var response = JSON.parse(this.responseText);
        var data = response.data;
        var top_list = document.querySelector('.top-anime-list');
        
        for (let l = 0; l < 3; l++) {
            const anime = data[l];
            const list_b = document.createElement('div');
            list_b.className = 'list_b';
            list_b.innerHTML = '<img class="list_img" src="' + anime.images.jpg.image_url + '">' +
                '<div class="list_info">' +
                '<h3 class="list_title">' + anime.title + '</h3>' +
                '<h3 class="list_favorites">Favorites: ' + anime.favorites +  '</h3>' +
                '</div>';
            top_list.appendChild(list_b);
        }
    }
};
topAnimeReq.open("GET", "https://api.jikan.moe/v4/top/anime?sfw", true);
topAnimeReq.send();
