import $ from "jquery";
$(function () {
  $(".form-holder").delegate("input", "focus", function () {
    $(".form-holder").removeClass("activee");
    $(this).parent().addClass("activee");
  });
});
