$(document).ready(
    function () {
        $(".corpFormationTab, .nonprofitFormationTab").hide();

        $(".llcBtn, .corpBtn, .nonprofitBtn").bind("click", function () {
            $(".corpFormationTab, .llcFormationTab, .nonprofitFormationTab").hide();
            $(".llcBtn, .corpBtn, .nonprofitBtn").removeClass("active");
            $(this).addClass("active");

            if ($(this).attr("id") == "show_llcFormationTab") {
                $(".llcFormationTab").show();
            } else if ($(this).attr("id") == "show_corpFormationTab") {
                $(".corpFormationTab").show();
            } else if ($(this).attr("id") == "show_nonprofitFormationTab") {
                $(".nonprofitFormationTab").show();
            }
        });
    });











// $("#accordion ul li").each(function () {
//   var trigger = $(this).find("a");
//   var siblings = $(this).siblings();
//   var acc_text = $(this).find(".accordion");
//   $(trigger).click(function () {
//     var visible_text = siblings.find(".accordion").filter(":visible");
//     $(acc_text).slideToggle();
//     $(visible_text).slideUp();
//   });
// });
