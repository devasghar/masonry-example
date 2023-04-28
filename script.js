$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 400,
    gutter: 10,
});

$(window).on('load', function () {
    let gridItems = $('.grid .grid-item');
    resize(gridItems);
});

$(window).on('resize', function () {
    let gridItems = $('.grid .grid-item');
    resize(gridItems);
});

const resize = (gridItems) => {
    gridItems.each((i, gridItem) => {
        if ($(gridItem).width() > $(window).width()) {
            $(gridItem).width($(window).width() - 20);
        } else {
            $(gridItem).attr('style', function(i, style)
            {
                return style && style.replace(/width[^;]+;?/g, '');
            });
        }
    })
}