$('#item-create-button').click(function(){
    $('.modal-container').toggleClass('hidden');
});

$('.close').click(function(){
    $('.modal-container').toggleClass('hidden');
});

$('.modal-bg').click(function(){
    $('.modal-container').toggleClass('hidden');
});

// $('#dark').click(function(){
//     console.log('adjust');
//     $('body').toggleClass('dark');
// });

const color = $('.dash-main').css('background-color');

const themeSwitch = () => {
    if (color == 'rgb(14, 19, 26)') {
        // console.log('working');
        $('body').toggleClass('light');
    } else if (color == 'rgb(241, 241, 241)') {
        // console.log('working');
        // console.log(color);
        $('body').toggleClass('dark');
    } else {
        console.log('not-working');
    }
}

const initTheme = () => {
    console.log(localStorage);
}

// const themeSwitch = $('#dark');

$('#dark').click(function(){
    themeSwitch();
    initTheme();
});