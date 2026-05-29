// add toggle functionality to abstract and bibtex buttons
// use event delegation so handlers work even if DOM is rendered after ready
$(document).ready(function() {
    $(document).on('click', '.abstract-toggle', function() {
        $(this).closest('li').find(".abstract.hidden").toggleClass('open');
        $(this).closest('li').find(".bibtex.hidden.open").toggleClass('open');
    });
    $(document).on('click', 'a.bibtex', function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
        $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');
});

// bootstrap-toc
$(document).ready(function () {
    if($('#toc-sidebar').length){
        var navSelector = "#toc-sidebar";
        var $myNav = $(navSelector);
        Toc.init($myNav);
        $("body").scrollspy({
            target: navSelector,
        });
    }
});

