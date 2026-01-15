var upcoming = new XMLHttpRequest();

let data;


upcoming.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
       data = JSON.parse(this.responseText);
       data = data.data;
        console.log(data);


        for (let i = 0; i < 3; i++) {
            const upcoming_list = document.querySelector('.upcoming-list');
            const list_a = document.createElement('div');
            list_a.className = 'list_a';
            list_a.innerHTML = `<img class="list_img" src="${data[i].images.jpg.image_url}">
        <div class="list_info">
        <h3 class="list_title">${data[i].title}</h3>
       <h3 class="list_status">Status: ${ data[i].status}</h3>
       <h3 class="list_favorites">Add to Favorites</h3>
       <h3 class= "add">✦</h3>
        </div>`;
            upcoming_list.appendChild(list_a);

            
        }
    }


}
    












upcoming.open("GET", `upcoming.json`, true);
upcoming.send();


const View_all = document.querySelector('.view');
View_all.addEventListener('click', () => {
    window.location.href = 'upcoming.html';
});

const fav_button = document.querySelector('.fav_button');
fav_button.addEventListener('click', () => {
    window.location.href = 'favorites.html';
});