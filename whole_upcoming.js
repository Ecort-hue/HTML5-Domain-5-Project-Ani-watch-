var upcoming = new XMLHttpRequest();
let data;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

upcoming.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        data = data.data;
        console.log(data);

        for (let i = 0; i < 15; i++) {
            const upcoming_list = document.querySelector('.upcoming-list');
            const list_a = document.createElement('div');
            list_a.className = 'list_a';
            list_a.innerHTML = `<img class="list_img" src="${data[i].images.jpg.image_url}">
            <div class="list_info">
            <h3 class="list_title">${data[i].title}</h3>
            <h3 class="list_status">Status: ${data[i].status}</h3>
            <h3 class="list_favorites">Add to Favorites</h3>
            <h3 class="add">⭐</h3>
        </div>`;
            upcoming_list.appendChild(list_a);


            const add = list_a.querySelector('.add');
            add.addEventListener('click', () => {
                const title = list_a.querySelector('.list_title').innerHTML;
                if (!favorites.includes(title)) {
                favorites.push(title);
                    localStorage.setItem('favorites', JSON.stringify(favorites));
                    alert(`${title} has been added to your favorites!`);
                console.log(favorites);
                }
            });
 }}
}
upcoming.open("GET", `upcoming.json`, true);
upcoming.send();


const back_button = document.querySelector('.back-button');
back_button.addEventListener('click', () => {
    window.location.href = 'home.html';
});

