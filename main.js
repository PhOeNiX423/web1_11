$(document).ready(function () {
    $('a:first').css('border', '5px solid blue');
    //.click() 
    $('img:first').click(function () {
        alert('Ура, ты нажал на картинку!');
    });
    //.toggleClass() 
    $('h1').dblclick(function(){
        $(this).toggleClass('blue')
    });
    
});
