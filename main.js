//.ready()
$(document).ready(function () {
    //.css() 
    $('a:first').css('border', '5px solid blue');
    //.click() 
    $('img:first').click(function () {
        alert('Ура, ты нажал на картинку!');
    });
    //.toggleClass() 
    $('h1').dblclick(function(){
        $(this).toggleClass('blue')
    });
    //.hide() 
    $('#hide').hide();
    //.change() 
    $('input').change(function(){
    //.text() 
        $('#userName').text(', '+$(this).val()+'!');
    });
    //.keypress()
    $('input').keypress(function(){
        $('#userName').text(', '+$(this).val()+'!');
    });
    //.keyup()
    $('input').keyup(function(){
        $('#userName').text(', '+$(this).val()+'!');
    });
    //.addClass()
    $('div').last().addClass('blue');
});
