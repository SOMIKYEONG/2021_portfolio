window.addEventListener('DOMContentLoaded', function () {
    $("#menu").show();
    $("#close").hide();
    $(document).ready(function () {
        $("#menu").click(function () {
            $("#menu").hide();
            $("#close").show();
            $(".slide").addClass("active");
        });
        $("main").click(function (e) {
            if (e.target.className != 'ham') {
                $(".slide").removeClass("active");
            }
        });
        $("#close").click(function (e) {
            $(".slide").removeClass("active");
            $("#menu").show();
            $("#close").hide();
        });

    });
});


