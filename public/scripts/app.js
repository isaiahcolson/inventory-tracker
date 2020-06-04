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
$('.item-edit-button').click(function(){
    $('.edit-items-modal').toggleClass('hidden');
});

$('.edit-close').click(function(){
    $('.edit-items-modal').toggleClass('hidden');
});

$('.edit-modal-bg').click(function(){
    $('.edit-items-modal').toggleClass('hidden');
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
const secondColor = $('.lists-main').css('background-color');

const initTheme = () => {
    if (color == 'rgb(14, 19, 26)' || secondColor == 'rgb(25, 31, 40)') {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', 'dark');
    } else if (color == 'rgb(241, 241, 241)' || secondColor == 'rgb(255, 255, 255)') {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', 'light');
    } else {
        console.log('not-working');
    }
}

const themeIsChecked = () => {
    const storageTheme = localStorage.getItem('theme');
    if (storageTheme === 'light') {
        localStorage.removeItem('isChecked');
        localStorage.setItem('isChecked', 'false');
    } else if (storageTheme === 'dark') {
        localStorage.removeItem('isChecked');
        localStorage.setItem('isChecked', 'true');
    } else {
        console.log('Theme Error');
    }
}

const themeSwitch = $('#themeSwitch');

const themeCheck = () => {
    const storageTheme = localStorage.getItem('theme');
    if (storageTheme === 'light') {
        $('#themeSwitch').prop({checked:false});
        // console.log('light theme selected');
    } else if (storageTheme === 'dark') {
        $('#themeSwitch').prop({checked:true});
        // console.log('dark theme selected');
    } else {
        console.log('not working');
    }
}

const testSomething = () => {
    console.log(localStorage);
}

const themeSwitch = () => {
    themeCheck();
    $('#themeSwitch').click(function(){
        initTheme();
        if ($('#themeSwitch').is(':checked')) {
            // console.log('checked');
            // $('body').removeClass();
            // $('body').addClass('dark');
            localStorage.removeItem('theme');
            localStorage.setItem('theme', 'dark');
        } else if ($('#themeSwitch').is(':not(:checked)')) {
            // console.log('not checked');
            // $('body').removeClass();
            // $('body').addClass('light');
            localStorage.removeItem('theme');
            localStorage.setItem('theme', 'light');
        } else {
            console.log('not working');
        }
        themeIsChecked();
        setTheme();
    });
}

const setTheme = () => {
    console.log(localStorage);
    const storageTheme = localStorage.getItem('theme');
    if (storageTheme === 'light') {
        $('body').removeClass();
        $('body').addClass('light');
        // storageTheme = 'light';
        // console.log('light theme selected');
    } else if (storageTheme === 'dark') {
        $('body').removeClass();
        $('body').addClass('dark');
        // storageTheme = 'dark';
        // console.log('dark theme selected');
    } else {
        console.log('not working');
    }
}


themeIsChecked();
// testSomething();
themeSwitch();
setTheme();