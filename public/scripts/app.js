/* item create events */
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



/* list create events */
$('.create-list-modal').click(function(){
    $('.create-list').toggleClass('hidden');
});

$('.list-close').click(function(){
    $('.create-list').toggleClass('hidden');
});

$('.create-list-bg').click(function(){
    $('.create-list').toggleClass('hidden');
});



/* list edit events */
$('#list-edit').click(function(){
    $('#list-edit-form').toggleClass('hidden');
    $('#list-name').toggleClass('hidden');
});

$('#list-edit-submit').click(function(){
    $('#list-edit-form').toggleClass('hidden');
    $('#list-name').toggleClass('hidden');
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

const themeCheck = () => {
    const storageTheme = localStorage.getItem('theme');
    if (storageTheme === 'light') {
        $('#themeSwitch').prop({checked:false});
    } else if (storageTheme === 'dark') {
        $('#themeSwitch').prop({checked:true});
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
            localStorage.removeItem('theme');
            localStorage.setItem('theme', 'dark');
        } else if ($('#themeSwitch').is(':not(:checked)')) {
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
    } else if (storageTheme === 'dark') {
        $('body').removeClass();
        $('body').addClass('dark');
    } else {
        console.log('not working');
    }
}


themeIsChecked();
themeSwitch();
setTheme();