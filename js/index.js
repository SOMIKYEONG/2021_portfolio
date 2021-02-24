// $(document).ready(function(){
//     $("#introduce_effect1").hide();
//     $("#introduce_effect2").hide();
//     $("#introduce_effect3").hide();
    
//     function textAuto1(counter){

//         setInterval(function(){
//             $("#introduce_effect1").fadeIn();
//             $("#introduce_effect2").fadeOut();
//             $("#introduce_effect3").fadeOut();
//         }, counter);
        
//     }
//     function textAuto2(counter){
        
//         setInterval(function(){
//             $("#introduce_effect1").fadeOut();
//             $("#introduce_effect2").fadeIn();
//             $("#introduce_effect3").fadeOut();
//         }, counter); 
        
//     }
//     function textAuto3(counter){
//         setInterval(function(){
//             $("#introduce_effect1").fadeOut();
//             $("#introduce_effect2").fadeOut();
//             $("#introduce_effect3").fadeIn();
//         }, counter);
//     }

//     // function myStopFunction() {
//     //     clearInterval(myVar);
//     //   }

//     textAuto1(2000);
//     textAuto2(4000);
//     textAuto3(6000);
//     // setInterval(textAuto1, 3000);
//     // setInterval(textAuto2, 6000);
//     // setInterval(textAuto3, 9000);

// });
window.addEventListener('DOMContentLoaded', function () {
    //auto slide p
    var d = $('.sec5p').width();
    var e = $('.sec5p').html();
    console.log(d)
    $('.sec5p').append(e);

    function auto2() {
        $('.sec5p').animate({
            left: -d
        }, 30000, function () {

            $(this).animate({
                left: 0
            }, 0)
        });
    }
    setInterval(auto2, 30000);
    auto2();

});
