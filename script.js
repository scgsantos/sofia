/*
$(function () {
  $(window).scroll(function () {
    var mass = Math.min(20, 1 + 0.005 * $(this).scrollTop());

    $("#expandable").css("transform", "scale(" + mass + ")");
  });
});
*/

const hello = document.querySelector("header h1");
const contentBox = document.querySelector(".content");
const introBox = document.querySelector("#about");

contentBox.onscroll = function () {
  const scrollPos = contentBox.scrollTop;

  console.log(scrollPos);

  if (scrollPos < 800) {
    const percentage = scrollPos / 800;
    const fontSize = 3.5 - (3.5 - 2.3) * percentage;
    const lineHeight = 4 - (4 - 2.6) * percentage;

    hello.style.fontSize = fontSize + "rem";
    hello.style.lineHeight = lineHeight + "rem";
  }
};
