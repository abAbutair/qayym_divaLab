$(function () {
    var fullHeight = $(window).height();
    var headerHeight = $('header nav').height();

    $('.intro, .banner').css('margin-top', headerHeight);
    $('.intro').css('height', fullHeight - headerHeight);
})

//--------------------------product-details-new-------------------
$(function () {
    var staticsHeight = $('.statics').height() + 30;
    $('.reporting').css('height', staticsHeight)
})

$(function () {
    var machineHeight = $('.customize-machine').height();
    $('.the-machine').css('height', machineHeight)
    $('.specifications').css('height', machineHeight)
})