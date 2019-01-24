var cur;

function displayImage(page, num){
  num = Math.floor(Math.random() * num);
  cur = num;
  document.getElementById('image_box').style.backgroundImage="url(../images/" + page + "/" + (num + 1) + ".png)";
}
function swapImage(page, max){
  cur == max - 1 ? cur = 0 : cur++;
  document.getElementById('image_box').style.backgroundImage="url(../images/" + page + "/" + (cur + 1) + ".png)";
}
