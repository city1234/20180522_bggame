$(document).ready(function() {
    /*linkhashanimate*/
    $(function() {

        $("a").click(function() {
            var target = $(this.hash);
            $("html,body").animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        });
    });
    /*endlinkhashanimate*/
});
