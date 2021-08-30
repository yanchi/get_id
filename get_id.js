$(function() {
  var page_id;
  var page_list  = new Array();
  page_list["top"]  = function(){
  	alert("TOPページを表示しています"); 
  }

  page_list["about"]  = function(){
  	alert("ABOUTページを表示しています"); 
  }
  
  page_list["company"]  = function(){
  	alert("COMPANYページを表示しています"); 
  }
key = Object.keys(page_list);
  $.each( key, function( key, value ) {
    page_id = document.getElementById(value);
    console.log(page_id);
    if(page_id){
      page_list[page_id.id](); 
      return false;
    }
  });
});