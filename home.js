var ani_list = new XMLHttpRequest();
let data;
ani_list.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
       data = JSON.parse(this.responseText);
       console.log(data);

        const a_img = document.querySelector('.a_img');
        a_img.src = data.data[2].images.jpg.image_url;
    const a_title = document.querySelector('.a_title');
    a_title.innerHTML = data.data[2].title;
    


       
        
    }}
;

ani_list.open("GET", `https://api.jikan.moe/v4/seasons/upcoming`, true);
ani_list.send();


