//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";
// import Plyr from "plyr";
import mixitup from 'mixitup';
// ------------------------------------------------



$(window).on("load", function() {
    $(".cssload").delay(200).fadeOut("slow");
});

// $(document).ready(function (e) {

//     $("input").on("blur", function () {
//         $(this).next("i").css("opacity", "0")

//     }); 
//     })

$(document).ready(function () {
    var containerEl = document.querySelector("#Container");
    var mixer = mixitup(containerEl, {
      // controls: {
        // toggleLogic: 'all',
      // },
    //   controls: {
    //     // enable:true,
    //     // activeClass:'on'
    // },

      animation: {
        enable:true,
        effects:'scale fade',
        duration:700
    }
    });
   });
 


// var targetSelector = '.mix';
// function getSelectorFromHash() {
//   var hash = window.location.hash.replace(/^#/g, '');
//   var selector = hash ? '.' + hash : targetSelector;
//   return selector;
// }


// function setHash(state) {
//   var selector = state.activeFilter.selector;
//   var newHash = '#' + selector.replace(/^\./g, '');

//   if (selector === targetSelector && window.location.hash) {

//     history.pushState(null, document.title, window.location.pathname); // or history.replaceState()
//   } else if (newHash !== window.location.hash && selector !== targetSelector) {
//     // Change the hash

//     history.pushState(null, document.title, window.location.pathname + newHash); // or history.replaceState()
//   }
// }
// var mixer = mixitup('#Container', {
//   selectors: {
//     target: targetSelector
//   },
//   load: {
//     filter: getSelectorFromHash() // Ensure that the mixer's initial filter matches the URL on startup
//   },
//   callbacks: {
//     onMixEnd: setHash // Call the setHash() method at the end of each operation
//   }
// });
// window.onhashchange = function () {
//   var selector = getSelectorFromHash();
//   if (selector === mixer.getState().activeFilter.selector) return; // no change
//   mixer.filter(selector);
// };