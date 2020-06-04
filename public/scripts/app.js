$('#item-create-button').click(function(){
    $('.create-modal').toggleClass('hidden');
});

$('.create-close').click(function(){
    $('.create-modal').toggleClass('hidden');
});

$('.create-modal-bg').click(function(){
    $('.create-modal').toggleClass('hidden');
});

$('.item-edit-button').click(function(){
    $('.edit-items-modal').toggleClass('hidden');
});

$('.edit-close').click(function(){
    $('.edit-items-modal').toggleClass('hidden');
});

$('.edit-modal-bg').click(function(){
    $('.edit-items-modal').toggleClass('hidden');
});

const color = $('.dash-main').css('background-color');
// let currentColor = 

const themeSwitch = () => {
    if (color == 'rgb(14, 19, 26)') {
        $('body').toggleClass('light');
        // $('body').toggleClass('dark');
        // localStorage.removeItem('theme');
        // localStorage.setItem('theme', 'light');
    } else if (color == 'rgb(241, 241, 241)') {
        $('body').toggleClass('dark');
        // $('body').toggleClass('light');
        // localStorage.removeItem('theme');
        // localStorage.setItem('theme', 'dark');
    } else {
        console.log('not-working');
        // $('body').removeClass();
    }
}

const themeTracking = () => {
    if ($('body').hasClass('light')) {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', 'light');
    } else if ($('body').hasClass('dark')) {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', 'dark');
    } else {
        console.log('not-working');
    }
}

const lightThemeSelected = (localStorage.getItem('theme') !== null && localStorage.getItem('theme') === 'light');
const darkThemeSelected = (localStorage.getItem('theme') !== null && localStorage.getItem('theme') === 'dark');

const initTheme = () => {
    console.log(localStorage);
    console.log(lightThemeSelected);
    console.log(darkThemeSelected);
}

$('#dark').click(function(){
    themeSwitch();
    // themeTracking();
    // initTheme();
});