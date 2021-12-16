$(document).ready(function () {
  // --- our code goes here ---
  console.log('composer-char-counter.js is running');

  $('textarea').on('input', function () {

    let characterCount = $(this).val().length;

    if (characterCount<= 140) {
      $(this)
        .closest(".new-tweet")
        .find(".counter")
        //.removeClass("red")
        .css("color", "#545149")
        .text(140 - characterCount);
    } else {
      $(this)
        .closest(".new-tweet")
        .find(".counter")
        //.addClass("red")
        .css("color", "red")
        .text(140 - characterCount);
    }
  });

});