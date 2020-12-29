$('doc-selector-item-switch').click(function(){

    $(this).addClass('active')
        .siblings()
        .removeClass('active');

});