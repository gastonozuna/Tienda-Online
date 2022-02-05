import $ from 'jquery';

let showCategories = false;

$('#categories').on('click',() => {

    console.log(showCategories);

    if(showCategories === false){
        $('.categoriesBox').css('display', 'block');
        showCategories = true;
    } else if (showCategories === true) {
        $('.categoriesBox').css('display', 'none');
        showCategories = false;
    }

})