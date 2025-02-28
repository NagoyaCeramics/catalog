$(function(){
    var totalPages = 90; // 画像の総数
    var $catalog = $('#catalog');
  
    // 1～90ページ分の画像を動的に生成
    for (var i = 1; i <= totalPages; i++) {
      var fileName = "catalogaki24_Page" + i + ".png";
      var imagePath = "images/" + fileName;
      // ページ要素と画像要素を作成
      var $pageDiv = $('<div class="page"></div>');
      var $img = $('<img>').attr('src', imagePath).attr('alt', "Page " + i);
      $pageDiv.append($img);
      $catalog.append($pageDiv);
    }
  });
  