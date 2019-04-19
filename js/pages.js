
function changePage(curPage, newPage) {
  document.getElementById('page_' + curPage).className = "fade_out hidden container";

  document.getElementById('back_cont_1').style.background = "url(backgrounds/background_0" + newPage + ".png) no-repeat center";
  document.getElementById('back_cont_2').className = "fade_out hidden back_cont";

  setTimeout(function() {
    document.getElementById('page_' + curPage).style.display = "none";
    document.getElementById('page_' + newPage).style.display = "flex";
    document.getElementById('page_' + newPage).className = "fade_in container";
    document.getElementById('back_cont_2').style.background = "url(backgrounds/background_0" + newPage + ".png) no-repeat center";
    document.getElementById('back_cont_2').className = "fade_in back_cont";
    document.getElementById('back_cont_2').style.display = "block";
  }, 250);
}
