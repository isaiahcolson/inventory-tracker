$('#item-create-button').click(function(){
    $('.modal-container').toggleClass('hidden');
});

$('.close').click(function(){
    $('.modal-container').toggleClass('hidden');
});

$('.modal-bg').click(function(){
    $('.modal-container').toggleClass('hidden');
});

$('#dark').click(function(){
    console.log('adjust');
    $('body').toggleClass('dark');
});