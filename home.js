var upcoming = new XMLHttpRequest();

let data;
upcoming.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
       data = JSON.parse(this.responseText);
        console.log(data);

    
for (let i = 0; i < 3; i++) {
    const upcoming_list = document.querySelector('.upcoming-list');
    const list_a = document.createElement('div');
    list_a.className = 'list_a';
    list_a.innerHTML = `<img class="list_img" src="${data.data[i].images.jpg.image_url}">
        <div class="list_info">
        <h3 class="list_title">${data.data[i].title}</h3>
        </div>`;
    upcoming_list.appendChild(list_a);

    var top = new XMLHttpRequest();

    top.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
            console.log(data);


            for (let j = 0; j < 3; j++) {
                const top_list = document.querySelector('.top-list');
                const list_b = document.createElement('div');
                list_b.className = 'list_b';
                list_b.innerHTML = `<img class="list_img" src="${data.data[j].images.jpg.image_url}">
        <div class="list_info">
        <h3 class="list_title">${data.data[j].title}</h3>
        </div>`;
                top_list.appendChild(list_b);
            }
        }
    };

    
}   
    }};








upcoming.open("GET", `https://api.jikan.moe/v4/seasons/upcoming`,  true);
upcoming.send();
top.open("GET", `top.json`, true);
top.send();
