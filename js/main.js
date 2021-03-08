$(document).ready(function() {

$('.ms-mouseover-anchor').mouseover(function() {
    $(this).find('.ms-menu-mouseover').addClass('active-block');
})
$('.ms-mouseover-anchor').mouseleave(function() {
    $(this).find('.ms-menu-mouseover').removeClass('active-block');
})

});