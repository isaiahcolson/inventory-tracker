/* item modal events */
$('#item-create-button').click(function(){
    $('.create-modal').toggleClass('hidden');
});

$('.create-close').click(function(){
    $('.create-modal').toggleClass('hidden');
});

$('.create-modal-bg').click(function(){
    $('.create-modal').toggleClass('hidden');
});



/* item edit events */
$('.item-edit-button').click(function(events){
    const target = event.target.dataset.id;
    console.log(target);
    $(`#${target}`).toggleClass('hidden');
});

$('.edit-close').click(function(){
    $('.edit-items-modal').addClass('hidden');
});

$('.edit-modal-bg').click(function(){
    $('.edit-items-modal').addClass('hidden');
});



/* delete list events */
$('#list-delete-prompt').click(function(){
    $('.delete-list-modal').toggleClass('hidden');
});

$('.delete-close').click(function(){
    $('.delete-list-modal').toggleClass('hidden');
});

$('.delete-modal-bg').click(function(){
    $('.delete-list-modal').toggleClass('hidden');
});



/* dark theme events */
const color = $('.dash-main').css('background-color');
// let currentColor = 

const initTheme = () => {
    if (color == 'rgb(14, 19, 26)') {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', 'dark');
    } else if (color == 'rgb(241, 241, 241)') {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', 'light');
    } else {
        console.log('not-working');
    }
}

const themeTracking = () => {
    if ($('body').hasClass('light')) {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', 'light');
    } else {
        console.log('not-working');
    }
}

const themeSwitch = $('#themeSwitch');

        // $('body').toggleClass('light');
        // $('body').toggleClass('dark');
        // $('body').toggleClass('dark');
        // $('body').toggleClass('light');



const lightThemeSelected = (localStorage.getItem('theme') !== null && localStorage.getItem('theme') === 'light');
const darkThemeSelected = (localStorage.getItem('theme') !== null && localStorage.getItem('theme') === 'dark');

const testSomething = () => {
    console.log(localStorage);
    // console.log(lightThemeSelected);
    // console.log(darkThemeSelected);
}

initTheme();
testSomething();

$('#dark').click(function(){
    // themeTracking();
});