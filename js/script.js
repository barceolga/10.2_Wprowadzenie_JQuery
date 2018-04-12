var span = $('span');
    span.each(function(index, element){
      if(index % 2 == 0) {
        $(element).css('color', 'red');
      }
    });

var paragraphs = $('p');
  paragraphs.each(function(index, element) {
    var button = '<button class= "btn" data-tmp="'+ index +'">Click me</button>';
    $(element).append(button);
    $('p:even').addClass("text-right");
  });

$('button').click(function(){
  alert($(this).attr('data-tmp'));
});

  span.each(function(index, element) {
    $('span:odd').css('font-size', '25px');
  });

var button = $('button');
button.each(function(index, element){
  if(index % 2 == 0) {
    $(element).addClass("special");
  }
  else{
    $(element).addClass("hello");
  }
});
var heading1 = $('h1')
var heading2 = '<h2 class="text-capitalize">Enjoy your visit</h2>';
$('h1').addClass('text-center').css('color', 'marron').append(heading2);
