//.ready()
$(document).ready(function () {
    //.css() 
    $('a:first').css('border', '5px solid blue');
    //.click() 
    $('img:first').click(function () {
        alert('Ура, ты нажал на картинку!');
    });
    //.toggleClass() 
    $('h1').dblclick(function () {
        $(this).toggleClass('blue')
    });
    //.hide() 
    $('button.hide').click(function(){
        $('img.hide').hide();
    });
    //.show()
    $('button.show').click(function(){
        $('img.hide').show();
    });
    //.change() 
    $('input').change(function () {
        //.text() 
        $('#userName').text(', ' + $(this).val() + '!');
    });
    //.keypress()
    $('input.imya').keypress(function () {
        $('#userName').text(', ' + $(this).val() + '!');
    });
    //.keyup()
    $('input.imya').keyup(function () {
        $('#userName').text(', ' + $(this).val() + '!');
    });
    //.addClass()
    $('div').last().addClass('blue');
    //.html()
    $('p.html').click(function () {
        var html = $(this).html();
        $(this).text(html);
    });
    //.trigger()
    $('button.trig').click(function () {
        update($("span.trig"));
    });

    function update(j) {
        var n = parseInt(j.text(), 10);
        j.text(n + 1);
    };
    //.prop()
    //.attr()
    //.find()
    //.filter()
    
    //.wrap()
    //.prepend()
    //.append()



});
