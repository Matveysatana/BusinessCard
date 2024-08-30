$(".element-menu__link").click (function () {
    const thisElement = $(this);

    const linkHref = thisElement.attr('href');
    const hrefElement = $(linkHref);

    $(".element-menu__link.active").removeClass('active');
    thisElement.addClass('active')
})