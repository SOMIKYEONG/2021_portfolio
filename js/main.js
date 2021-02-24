window.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
        $(".drawsvg").css({
            'height': 100 + 'vh'
        });
        $("#fade-text").css({
            'font-size': '3em'
        });
        $("body section").hide();

        $(".drawboxp").click(function () {
            $(".drawsvg").css({
                'height': 20 + 'vh',
                'background': '#3498db'
            });
            $("#fade-text").css({
                display: 'none'
            });
            $(".drawbox").css({
                'top': 25 + '%'
            });
            $(".drawbox p").css({
                'border': 2 + 'px solid #fff'
            });
            $(".drawbox p a").css({
                'color': '#fff'
            });
            $("body section").show();
        });

    });


});
