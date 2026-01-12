var upcoming = new XMLHttpRequest();
var top = new XMLHttpRequest();
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
        </div>`;
            upcoming_list.appendChild(list_a);
        }
    }


}
    


// let top_data;
//   top.onreadystatechange = function() {
//     if (top.readyState === 4 && top.status === 200) {
//         console.log(top.responseText);

//     }
//   };
    










upcoming.open("GET", `https://api.jikan.moe/v4/seasons/upcoming`, true);
upcoming.send();
// top.open("GET", `https://api.jikan.moe/v4/top/anime?type=ona`, true);
// top.send();
