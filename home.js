var ani_list = new XMLHttpRequest();
let data;
ani_list.onreadystatechange = function () {
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
}   
    }}
;







ani_list.open("GET", `https://api.jikan.moe/v4/seasons/upcoming`, 'https://api.jikan.moe/v4/top/anime?sfw',  true);
ani_list.send();


