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
    $('button.hide').click(function () {
        $('img.hide').hide();
    });
    //.show()
    $('button.show').click(function () {
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
    $('div.selec').last().addClass('blue');
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
    $("input#check1").change(function () {
        var $input = $(this);
        $("p.check1").html(".attr('checked'): <b>" + $input.attr('checked') + "</b><br>" +
            ".prop('checked'): <b>" + $input.prop('checked') + "</b><br>" +
            ".is(':checked'): <b>" + $input.is(':checked')) + "</b>";
    }).change();
    //.find()
    $('ul.find').find('li:first').css('background-color', 'red');
    //.filter()
    $("ul.find").filter(":even").css("background-color", "green");
    //.wrap()
    $('span.wrap').wrap('<div><p><b><i></i></b></p></div>');
    //.prepend()
    $(".list").prepend("<li class='item'> Тест </li>");
    //.append()
    $('.item').filter(':even');
    $(".list .item:even").append(" первый!").css("background-color", "#cceecc");
    $(".list .item:odd").append(" второй!").css("background-color", "#eeeeee");;
    //Виджет
    //Плагин
  
});
