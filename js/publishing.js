window.addEventListener('DOMContentLoaded', function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1500) {
            $("#fd1").width('45%');
        }
        if ($(this).scrollTop() >= 2000) {
            $("#fd2").width('45%');
        }
        if ($(this).scrollTop() >= 2500) {
            $("#fd3").width('45%');
        }
        if ($(this).scrollTop() >= 3000) {
            $("#fd4").width('45%');
        }
        if ($(this).scrollTop() >= 3500) {
            $("#fd5").width('45%');
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() <= 1500) {
            $("#fd1").width('50%');
        }
        if ($(this).scrollTop() <= 2000) {
            $("#fd2").width('50%');
        }
        if ($(this).scrollTop() <= 2500) {
            $("#fd3").width('50%');
        }
        if ($(this).scrollTop() <= 3000) {
            $("#fd4").width('50%');
        }
        if ($(this).scrollTop() <= 3500) {
            $("#fd5").width('50%');
        }
    });

    var n = document.querySelector('#section6 nav');
    var a = document.querySelectorAll('#section6 nav a');


    a.forEach(function (e) {
        e.addEventListener('mouseover', function () {
            for (var i = 1; i <= a.length; i++) {
                n.classList.add('active');
            }
        });
        e.addEventListener('mouseout', function () {
            for (var i = 1; i <= a.length; i++) {
                n.classList.remove('active');
            }
        });
    });
    
    $(".sec7_1").load("sticker.html");

});
