$(function() {
  var page_list = {top: "TOPページ", about: "〇〇についてページ",company:"会社情報"}
  var page_id;

  $.each( page_list, function( key, value ) {
    page_id = document.getElementById(key);
    console.log(page_id);
    if(page_id){
      alert(page_list[page_id.id]); 
      return false;
    }
  });
});