$(document).ready(function () {
  var $moveable = $(".move-rect");
  var rectPosY = parseInt($(".inspo-list_effect").css("top"), 10);
  var rectPosX = parseInt($(".inspo-list_effect").css("left"), 10);
  $(".inspo-flex_wrapper").mousemove(function (e) {
    $moveable.css({
      top: rectPosY - e.pageY / 40,
      left: rectPosX - e.pageX / 40,
    });
  });
});
