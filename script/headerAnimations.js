const LOGO = $(".logo"),
    SEARCHico = $(".fa-search");

SEARCHico.hover(
    function () {
        $(this).removeClass('out').addClass('over');
    },
    function () {
        $(this).removeClass('over').addClass('out');
    });

LOGO.on("click", function () {
    $(this).addClass("animated shake");
}).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
    $(this).removeClass("animated shake");
});