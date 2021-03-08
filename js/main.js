$(document).ready(function() { 
 
    $('.ms-mouseover-anchor').mouseover(function() { 
        $(this).find('.ms-menu-mouseover').addClass('active-block'); 
    }) 
    $('.ms-menu-mouseover').mouseleave(function() {
        $(this).removeClass('active-block'); 
    }) 
     
});