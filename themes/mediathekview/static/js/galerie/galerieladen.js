$(".galerie > ul > li > img").each(function() { 
 $(this).attr("rel", "group1");
 $(this).attr("data-glisse-big", $(this).attr("src").replace(/_klein/g, ""));
 $(this).addClass("pics");
});
$(function () {
    $('.pics').glisse({
        changeSpeed: 550, 
        speed: 500,
        effect: 'bounce',
        fullscreen: true,
        mobile: true,
        bootstrap: true,
        bootstrapl18nNext: "Nächstes",
        bootstrapl18nPrevious: "Vorheriges",
        bootstrapl18nClose: "Schließen"
    }); 
});