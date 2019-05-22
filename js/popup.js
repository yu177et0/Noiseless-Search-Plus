var backGround = chrome.extension.getBackgroundPage();

$(function(){
    $('#search').click(function(){
        var word = $('#word').val();
        backGround.search($('input[name=tab1]:checked').val(),$('input[name=tab2]:checked').val(), word);
    }); 
    
     $('#shortcuts').click(function(){
        backGround.openShortcuts();
    });    
    
});

document.onkeydown = function(e) {
    var keyCode = false;
 
    if (e) event = e;
 
    if (event) {
        if (event.keyCode) {
            keyCode = event.keyCode;
        } else if (event.which) {
            keyCode = event.which;
        }
    }
 
    if (keyCode == 13){
        var word = $('#word').val();
        backGround.search($('input[name=tab1]:checked').val(),$('input[name=tab2]:checked').val(), word);
    }
};