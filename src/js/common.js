//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";
// ------------------------------------------------



$(window).on("load", function() {
    $(".cssload").delay(200).fadeOut("slow");
});

// $(document).ready(function (e) {

//     $("input").on("blur", function () {
//         $(this).next("i").css("opacity", "0")

//     }); 
//     })


import Plyr from "plyr";