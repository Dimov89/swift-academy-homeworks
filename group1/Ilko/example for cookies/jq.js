/*var allCookies = document.cookie.split(';');
for(var i=0; i<allCookies.length; i++){
    var cookie = allCookies[i];
    if (cookie.match(/^language=/)){
        
    }
}

$(".lang-bg").hide();
$("#langSelect").change(function(){
    var lang = $(this).val();
    $(".lang-bg, .lang-en").hide();
    $(".lang-" + lang).show();
    
    document.cookie = "language=" + lang;
});
*/

$('#langSelect').change(function(){
  var lang = $(this).val();
  $('[class*=lang-]').hide();
  $('.lang-' + lang).show();

  document.cookie = "language=" + lang;
});

var allCookies = document.cookie.split('; ');

for(var i=0; i<allCookies.length; i++) {
  var cookie = allCookies[i].split('=');
  if (cookie[0] === "language") {
    $('#langSelect').val(cookie[1]);
    $('#langSelect').change();
  }
}