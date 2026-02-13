var top_ = new XMLHttpRequest();
let data;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

top_.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        data = data.data;
        console.log(data);

        for (let l = 0; l < 21; l++) {
            const top_list = document.querySelector('.top_list');
            const list_b = document.createElement('div');
            list_b.className = 'list_b';
            list_b.innerHTML = `<img class="list_img" src="${data[l].images.jpg.image_url}">
            <div class="list_info">
            <h3 class="list_title">${data[l].title}</h3>
            <h3 class="list_status">Status: ${data[l].status}</h3>
            <h3 class="list_favorites">Add to Favorites</h3>
            <h3 class="add">⭐</h3>
        </div>`;
            top_list.appendChild(list_b);


            const add = list_b.querySelector('.add');
            add.addEventListener('click', () => {
                const title = list_b.querySelector('.list_title').innerHTML;
                if (!favorites.includes(title)) {
                    favorites.push(title);
                    localStorage.setItem('favorites', JSON.stringify(favorites));
                    alert(`${title} has been added to your favorites!`);
                    console.log(favorites);
                }
            });
        }
    }
}
top_.open("GET", `top.json`, true);
top_.send();


const back_button = document.querySelector('.back-button');
back_button.addEventListener('click', () => {
    window.location.href = 'home.html';
});

