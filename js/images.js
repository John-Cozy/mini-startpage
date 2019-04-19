var num;

function displayImage(page, max) {
  num = Math.floor(Math.random() * max);
  setImage(page);
}
function swapImage(page, max) {
  num == max - 1 ? num = 0 : num++;
  setImage(page);
}
function setImage(page) {
  document.getElementById('image_box_' + page).style.backgroundImage="url(images/" + page + "/" + (num + 1) + ".png)";
}
