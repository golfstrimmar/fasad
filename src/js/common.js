import $ from "./jquery.js";
// import  mixitup from "mixItUp";

// ------------------------------------------------

[].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function () {
      img.removeAttribute('data-src');
  };
});



$(window).on("load", function() {
    $(".cssload").delay(200).fadeOut("slow");
});


// $(document).ready(function () {
//   var containerEl = document.querySelector("#Container");
//   var mixer = mixitup(containerEl, {
//     // controls: {
//       // toggleLogic: "and",
//     // },
//   });
//  });

