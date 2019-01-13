function displayImage(page, num){
    num = Math.floor(Math.random() * num);
    document.getElementById('image_box').style.backgroundImage="url(../images/" + page + "/" + (num + 1) + ".png)";
}
